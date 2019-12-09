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

import autoInit from '@limetech/mdc-p2-auto-init/index';
import * as base from '@limetech/mdc-p2-base/index';
import * as checkbox from '@limetech/mdc-p2-checkbox/index';
import * as chips from '@limetech/mdc-p2-chips/index';
import * as dataTable from '@limetech/mdc-p2-data-table/index';
import * as dialog from '@limetech/mdc-p2-dialog/index';
import * as dom from '@limetech/mdc-p2-dom/index';
import * as drawer from '@limetech/mdc-p2-drawer/index';
import * as floatingLabel from '@limetech/mdc-p2-floating-label/index';
import * as formField from '@limetech/mdc-p2-form-field/index';
import * as gridList from '@limetech/mdc-p2-grid-list/index';
import * as iconButton from '@limetech/mdc-p2-icon-button/index';
import * as lineRipple from '@limetech/mdc-p2-line-ripple/index';
import * as linearProgress from '@limetech/mdc-p2-linear-progress/index';
import * as list from '@limetech/mdc-p2-list/index';
import * as menuSurface from '@limetech/mdc-p2-menu-surface/index';
import * as menu from '@limetech/mdc-p2-menu/index';
import * as notchedOutline from '@limetech/mdc-p2-notched-outline/index';
import * as radio from '@limetech/mdc-p2-radio/index';
import * as ripple from '@limetech/mdc-p2-ripple/index';
import * as select from '@limetech/mdc-p2-select/index';
import * as slider from '@limetech/mdc-p2-slider/index';
import * as snackbar from '@limetech/mdc-p2-snackbar/index';
import * as switchControl from '@limetech/mdc-p2-switch/index';
import * as tabBar from '@limetech/mdc-p2-tab-bar/index';
import * as tabIndicator from '@limetech/mdc-p2-tab-indicator/index';
import * as tabScroller from '@limetech/mdc-p2-tab-scroller/index';
import * as tab from '@limetech/mdc-p2-tab/index';
import * as textField from '@limetech/mdc-p2-textfield/index';
import * as topAppBar from '@limetech/mdc-p2-top-app-bar/index';

// Register all components
autoInit.register('MDCCheckbox', checkbox.MDCCheckbox);
autoInit.register('MDCChip', chips.MDCChip);
autoInit.register('MDCChipSet', chips.MDCChipSet);
autoInit.register('MDCDataTable', dataTable.MDCDataTable);
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
autoInit.register('MDCTopAppBar', topAppBar.MDCTopAppBar);

// Export all components.
export {
  autoInit,
  base,
  checkbox,
  chips,
  dataTable,
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
  topAppBar,
};
