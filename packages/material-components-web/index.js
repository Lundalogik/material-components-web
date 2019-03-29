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

import autoInit from '@lime-material-16px/auto-init/index';
import * as base from '@lime-material-16px/base/index';
import * as checkbox from '@lime-material-16px/checkbox/index';
import * as chips from '@lime-material-16px/chips/index';
import * as dialog from '@lime-material-16px/dialog/index';
import * as dom from '@lime-material-16px/dom/index';
import * as drawer from '@lime-material-16px/drawer/index';
import * as floatingLabel from '@lime-material-16px/floating-label/index';
import * as formField from '@lime-material-16px/form-field/index';
import * as gridList from '@lime-material-16px/grid-list/index';
import * as iconButton from '@lime-material-16px/icon-button/index';
import * as iconToggle from '@lime-material-16px/icon-toggle/index';
import * as linearProgress from '@lime-material-16px/linear-progress/index';
import * as lineRipple from '@lime-material-16px/line-ripple/index';
import * as list from '@lime-material-16px/list/index';
import * as menu from '@lime-material-16px/menu/index';
import * as menuSurface from '@lime-material-16px/menu-surface/index';
import * as notchedOutline from '@lime-material-16px/notched-outline/index';
import * as radio from '@lime-material-16px/radio/index';
import * as ripple from '@lime-material-16px/ripple/index';
import * as select from '@lime-material-16px/select/index';
import * as selectionControl from '@lime-material-16px/selection-control/index';
import * as slider from '@lime-material-16px/slider/index';
import * as snackbar from '@lime-material-16px/snackbar/index';
import * as switchControl from '@lime-material-16px/switch/index';
import * as tab from '@lime-material-16px/tab/index';
import * as tabBar from '@lime-material-16px/tab-bar/index';
import * as tabIndicator from '@lime-material-16px/tab-indicator/index';
import * as tabScroller from '@lime-material-16px/tab-scroller/index';
import * as textField from '@lime-material-16px/textfield/index';
import * as toolbar from '@lime-material-16px/toolbar/index';
import * as topAppBar from '@lime-material-16px/top-app-bar/index';

// Register all components
autoInit.register('MDCCheckbox', checkbox.MDCCheckbox);
autoInit.register('MDCChip', chips.MDCChip);
autoInit.register('MDCChipSet', chips.MDCChipSet);
autoInit.register('MDCDialog', dialog.MDCDialog);
autoInit.register('MDCDrawer', drawer.MDCDrawer);
autoInit.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel);
autoInit.register('MDCFormField', formField.MDCFormField);
autoInit.register('MDCRipple', ripple.MDCRipple);
autoInit.register('MDCGridList', gridList.MDCGridList);
autoInit.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle);
autoInit.register('MDCIconToggle', iconToggle.MDCIconToggle);
autoInit.register('MDCLineRipple', lineRipple.MDCLineRipple);
autoInit.register('MDCLinearProgress', linearProgress.MDCLinearProgress);
autoInit.register('MDCList', list.MDCList);
autoInit.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline);
autoInit.register('MDCRadio', radio.MDCRadio);
autoInit.register('MDCSnackbar', snackbar.MDCSnackbar);
autoInit.register('MDCTabBar', tabBar.MDCTabBar);
autoInit.register('MDCTextField', textField.MDCTextField);
autoInit.register('MDCMenu', menu.MDCMenu);
autoInit.register('MDCMenuSurface', menuSurface.MDCMenuSurface);
autoInit.register('MDCSelect', select.MDCSelect);
autoInit.register('MDCSlider', slider.MDCSlider);
autoInit.register('MDCSwitch', switchControl.MDCSwitch);
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
  iconToggle,
  lineRipple,
  linearProgress,
  list,
  menu,
  menuSurface,
  notchedOutline,
  radio,
  ripple,
  select,
  selectionControl,
  slider,
  switchControl,
  snackbar,
  tab,
  tabBar,
  tabIndicator,
  tabScroller,
  textField,
  toolbar,
  topAppBar,
};
