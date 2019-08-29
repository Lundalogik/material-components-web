/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import autoInit from '@limetech/mdc-auto-init/index';
import * as base from '@limetech/mdc-base/index';
import * as checkbox from '@limetech/mdc-checkbox/index';
import * as chips from '@limetech/mdc-chips/index';
import * as dialog from '@limetech/mdc-dialog/index';
import * as dom from '@limetech/mdc-dom/index';
import * as drawer from '@limetech/mdc-drawer/index';
import * as floatingLabel from '@limetech/mdc-floating-label/index';
import * as formField from '@limetech/mdc-form-field/index';
import * as gridList from '@limetech/mdc-grid-list/index';
import * as iconButton from '@limetech/mdc-icon-button/index';
import * as lineRipple from '@limetech/mdc-line-ripple/index';
import * as linearProgress from '@limetech/mdc-linear-progress/index';
import * as list from '@limetech/mdc-list/index';
import * as menuSurface from '@limetech/mdc-menu-surface/index';
import * as menu from '@limetech/mdc-menu/index';
import * as notchedOutline from '@limetech/mdc-notched-outline/index';
import * as radio from '@limetech/mdc-radio/index';
import * as ripple from '@limetech/mdc-ripple/index';
import * as select from '@limetech/mdc-select/index';
import * as slider from '@limetech/mdc-slider/index';
import * as snackbar from '@limetech/mdc-snackbar/index';
import * as switchControl from '@limetech/mdc-switch/index';
import * as tabBar from '@limetech/mdc-tab-bar/index';
import * as tabIndicator from '@limetech/mdc-tab-indicator/index';
import * as tabScroller from '@limetech/mdc-tab-scroller/index';
import * as tab from '@limetech/mdc-tab/index';
import * as textField from '@limetech/mdc-textfield/index';
import * as toolbar from '@limetech/mdc-toolbar/index';
import * as topAppBar from '@limetech/mdc-top-app-bar/index';

// Register all components
autoInit.register('MDCCheckbox', checkbox.MDCCheckbox);
autoInit.register('MDCChip', chips.MDCChip);
autoInit.register('MDCChipSet', chips.MDCChipSet);
autoInit.register('MDCDialog', dialog.MDCDialog);
autoInit.register('MDCDrawer', drawer.MDCDrawer);
autoInit.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel);
autoInit.register('MDCFormField', formField.MDCFormField);
autoInit.register('MDCGridList', gridList.MDCGridList);
autoInit.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle);
autoInit.register('MDCLineRipple', lineRipple.MDCLineRipple);
autoInit.register('MDCLinearProgress', linearProgress.MDCLinearProgress);
autoInit.register('MDCList', list.MDCList);
autoInit.register('MDCMenu', menu.MDCMenu);
autoInit.register('MDCMenuSurface', menuSurface.MDCMenuSurface);
autoInit.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline);
autoInit.register('MDCRadio', radio.MDCRadio);
autoInit.register('MDCRipple', ripple.MDCRipple);
autoInit.register('MDCSelect', select.MDCSelect);
autoInit.register('MDCSlider', slider.MDCSlider);
autoInit.register('MDCSnackbar', snackbar.MDCSnackbar);
autoInit.register('MDCSwitch', switchControl.MDCSwitch);
autoInit.register('MDCTabBar', tabBar.MDCTabBar);
autoInit.register('MDCTextField', textField.MDCTextField);
autoInit.register('MDCToolbar', toolbar.MDCToolbar);
autoInit.register('MDCTopAppBar', topAppBar.MDCTopAppBar);

// Export all components.
export {
  autoInit,
  base,
  checkbox,
  chips,
  dialog,
  dom,
  drawer,
  floatingLabel,
  formField,
  gridList,
  iconButton,
  lineRipple,
  linearProgress,
  list,
  menu,
  menuSurface,
  notchedOutline,
  radio,
  ripple,
  select,
  slider,
  snackbar,
  switchControl,
  tab,
  tabBar,
  tabIndicator,
  tabScroller,
  textField,
  toolbar,
  topAppBar,
};
