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
import * as menu from '@lime-material/menu/index';
import * as notchedOutline from '@lime-material/notched-outline/index';
import * as radio from '@lime-material/radio/index';
import * as ripple from '@lime-material/ripple/index';
import * as select from '@lime-material/select/index';
import * as selectionControl from '@lime-material/selection-control/index';
import * as slider from '@lime-material/slider/index';
import * as snackbar from '@lime-material/snackbar/index';
import * as tabs from '@lime-material/tabs/index';
import * as textField from '@lime-material/textfield/index';
import * as toolbar from '@lime-material/toolbar/index';
import * as topAppBar from '@lime-material/top-app-bar/index';

// Register all components
autoInit.register('MDCCheckbox', checkbox.MDCCheckbox);
autoInit.register('MDCChip', chips.MDCChip);
autoInit.register('MDCChipSet', chips.MDCChipSet);
autoInit.register('MDCDialog', dialog.MDCDialog);
autoInit.register('MDCPersistentDrawer', drawer.MDCPersistentDrawer);
autoInit.register('MDCTemporaryDrawer', drawer.MDCTemporaryDrawer);
autoInit.register('MDCFloatingLabel', floatingLabel.MDCFloatingLabel);
autoInit.register('MDCFormField', formField.MDCFormField);
autoInit.register('MDCRipple', ripple.MDCRipple);
autoInit.register('MDCGridList', gridList.MDCGridList);
autoInit.register('MDCIconButtonToggle', iconButton.MDCIconButtonToggle);
autoInit.register('MDCIconToggle', iconToggle.MDCIconToggle);
autoInit.register('MDCLineRipple', lineRipple.MDCLineRipple);
autoInit.register('MDCLinearProgress', linearProgress.MDCLinearProgress);
autoInit.register('MDCNotchedOutline', notchedOutline.MDCNotchedOutline);
autoInit.register('MDCRadio', radio.MDCRadio);
autoInit.register('MDCSnackbar', snackbar.MDCSnackbar);
autoInit.register('MDCTab', tabs.MDCTab);
autoInit.register('MDCTabBar', tabs.MDCTabBar);
autoInit.register('MDCTextField', textField.MDCTextField);
autoInit.register('MDCMenu', menu.MDCMenu);
autoInit.register('MDCSelect', select.MDCSelect);
autoInit.register('MDCSlider', slider.MDCSlider);
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
  menu,
  notchedOutline,
  radio,
  ripple,
  select,
  selectionControl,
  slider,
  snackbar,
  tabs,
  textField,
  toolbar,
  topAppBar,
};
