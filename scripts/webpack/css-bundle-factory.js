/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const autoprefixer = require('autoprefixer');

const CSS_SOURCE_MAP = true;
const CSS_DEVTOOL = CSS_SOURCE_MAP ? 'source-map' : false;

module.exports = class CssBundleFactory {
  constructor({
    pathResolver,
    globber,
    pluginFactory,
    autoprefixerLib = autoprefixer,
  } = {}) {
    /** @type {!PathResolver} */
    this.pathResolver_ = pathResolver;

    /** @type {!Globber} */
    this.globber_ = globber;

    /** @type {!PluginFactory} */
    this.pluginFactory_ = pluginFactory;

    /** @type {function(opts: ...*=)} */
    this.autoprefixerLib_ = autoprefixerLib;
  }

  createCustomCss(
    {
      bundleName,
      chunks,
      chunkGlobConfig: {
        inputDirectory = null,
        filePathPattern = null,
      } = {},
      output: {
        fsDirAbsolutePath,
        httpDirAbsolutePath,
        filenamePattern = '[name].css',
      },
      plugins = [],
    }) {
    chunks = chunks || this.globber_.getChunks({inputDirectory, filePathPattern});
    const extractTextPlugin = this.pluginFactory_.createExtractTextPlugin(filenamePattern);

    return {
      name: bundleName,
      entry: chunks,
      output: {
        path: fsDirAbsolutePath,
        publicPath: httpDirAbsolutePath,
        filename: `${filenamePattern}.js`, // Webpack 3.x emits CSS wrapped in a JS file (extractTextPlugin extracts it)
      },
      devtool: CSS_DEVTOOL,
      module: {
        rules: [{
          test: /\.scss$/,
          use: this.createCssLoader_(extractTextPlugin),
        }],
      },
      plugins: [
        extractTextPlugin,
        this.pluginFactory_.createCssCleanupPlugin({
          outputDirRelativePath: fsDirAbsolutePath,
          pathResolver: this.pathResolver_,
          globber: this.globber_,
        }),
        this.pluginFactory_.createCopyrightBannerPlugin(),
        ...plugins,
      ],
    };
  }

  createMainCss(
    {
      output: {
        fsDirAbsolutePath,
        httpDirAbsolutePath,
      },
    }) {
    const getAbsolutePath = (...args) => this.pathResolver_.getAbsolutePath(...args);

    return this.createCustomCss({
      bundleName: 'main-css',
      chunks: {
        'mdc.button': getAbsolutePath('/packages/mdc-button/mdc-button.scss'),
        'mdc.card': getAbsolutePath('/packages/mdc-card/mdc-card.scss'),
        'mdc.checkbox': getAbsolutePath('/packages/mdc-checkbox/mdc-checkbox.scss'),
        'mdc.dialog': getAbsolutePath('/packages/mdc-dialog/mdc-dialog.scss'),
        'mdc.drawer': getAbsolutePath('/packages/mdc-drawer/mdc-drawer.scss'),
        'mdc.elevation': getAbsolutePath('/packages/mdc-elevation/mdc-elevation.scss'),
        'mdc.fab': getAbsolutePath('/packages/mdc-fab/mdc-fab.scss'),
        'mdc.form-field': getAbsolutePath('/packages/mdc-form-field/mdc-form-field.scss'),
        'mdc.grid-list': getAbsolutePath('/packages/mdc-grid-list/mdc-grid-list.scss'),
        'mdc.icon-toggle': getAbsolutePath('/packages/mdc-icon-toggle/mdc-icon-toggle.scss'),
        'mdc.layout-grid': getAbsolutePath('/packages/mdc-layout-grid/mdc-layout-grid.scss'),
        'mdc.linear-progress': getAbsolutePath('/packages/mdc-linear-progress/mdc-linear-progress.scss'),
        'mdc.list': getAbsolutePath('/packages/mdc-list/mdc-list.scss'),
        'mdc.menu': getAbsolutePath('/packages/mdc-menu/mdc-menu.scss'),
        'mdc.radio': getAbsolutePath('/packages/mdc-radio/mdc-radio.scss'),
        'mdc.ripple': getAbsolutePath('/packages/mdc-ripple/mdc-ripple.scss'),
        'mdc.select': getAbsolutePath('/packages/mdc-select/mdc-select.scss'),
        'mdc.slider': getAbsolutePath('/packages/mdc-slider/mdc-slider.scss'),
        'mdc.snackbar': getAbsolutePath('/packages/mdc-snackbar/mdc-snackbar.scss'),
        'mdc.switch': getAbsolutePath('/packages/mdc-switch/mdc-switch.scss'),
        'mdc.tabs': getAbsolutePath('/packages/mdc-tabs/mdc-tabs.scss'),
        'mdc.textfield': getAbsolutePath('/packages/mdc-textfield/mdc-text-field.scss'),
        'mdc.theme': getAbsolutePath('/packages/mdc-theme/mdc-theme.scss'),
        'mdc.toolbar': getAbsolutePath('/packages/mdc-toolbar/mdc-toolbar.scss'),
        'mdc.typography': getAbsolutePath('/packages/mdc-typography/mdc-typography.scss'),
      },
      output: {
        fsDirAbsolutePath,
        httpDirAbsolutePath,
      },
    });
  }

  createCssLoader_(extractTextPlugin) {
    return extractTextPlugin.extract({
      fallback: 'style-loader',
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: CSS_SOURCE_MAP,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: CSS_SOURCE_MAP,
            plugins: () => [this.autoprefixerLib_({grid: false})],
          },
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: CSS_SOURCE_MAP,
            includePaths: this.globber_.getAbsolutePaths('/packages/*/node_modules'),
          },
        },
      ],
    });
  }
};