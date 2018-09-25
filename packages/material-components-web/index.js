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

import autoInit from '@lime-material/auto-init/index';
import * as base from '@lime-material/base/index';
import * as checkbox from '@lime-material/checkbox/index';
import * as chips from '@lime-material/chips/index';
import * as dialog from '@lime-material/dialog/index';
import * as drawer from '@lime-material/drawer/index';
import * as floatingLabel from '@lime-material/floating-label/index';
import * as formField from '@lime-material/form-field/index';
import * as gridList from '@lime-material/grid-list/index';
import * as iconButton from '@lime-material/icon-button/index';
import * as iconToggle from '@lime-material/icon-toggle/index';
import * as linearProgress from '@lime-material/linear-progress/index';
import * as lineRipple from '@lime-material/line-ripple/index';
import * as list from '@lime-material/list/index';
import * as menu from '@lime-material/menu/index';
import * as menuSurface from '@lime-material/menu-surface/index';
import * as notchedOutline from '@lime-material/notched-outline/index';
import * as radio from '@lime-material/radio/index';
import * as ripple from '@lime-material/ripple/index';
import * as select from '@lime-material/select/index';
import * as selectionControl from '@lime-material/selection-control/index';
import * as slider from '@lime-material/slider/index';
import * as snackbar from '@lime-material/snackbar/index';
import * as switchControl from '@lime-material/switch/index';
import * as tab from '@lime-material/tab/index';
import * as tabBar from '@lime-material/tab-bar/index';
import * as tabIndicator from '@lime-material/tab-indicator/index';
import * as tabScroller from '@lime-material/tab-scroller/index';
import * as textField from '@lime-material/textfield/index';
import * as toolbar from '@lime-material/toolbar/index';
import * as topAppBar from '@lime-material/top-app-bar/index';

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
