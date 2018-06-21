import { NgModule } from '@angular/core';
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxCardModule,
    IgxCarouselModule,
    IgxCalendarModule,
    IgxChipsModule,
    IgxIconModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxComboModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxInputGroupModule,
    IgxDropDownModule,
    IgxToggleModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxMaskModule,
    IgxLayoutModule,
    IgxSnackbarModule,
    IgxRadioModule,
    IgxCheckboxModule,
    IgxSwitchModule,
    IgxListModule,
    IgxFilterModule,
    IgxForOfModule,
    IgxNavbarModule,
    IgxProgressBarModule,
    IgxSliderModule,
    IgxBottomNavModule,
    IgxTabsModule,
    IgxTimePickerModule,
    IgxToastModule,
} from 'igniteui-angular';

const igniteModules = [
    IgxAvatarModule,
    IgxBadgeModule,
    IgxCardModule,
    IgxCalendarModule,
    IgxCarouselModule,
    IgxChipsModule,
    IgxDatePickerModule,
    IgxDialogModule,
    IgxComboModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxToggleModule,
    IgxLayoutModule,
    IgxNavigationDrawerModule,
    IgxRippleModule,
    IgxMaskModule,
    IgxSnackbarModule,
    IgxRadioModule,
    IgxCheckboxModule,
    IgxSwitchModule,
    IgxListModule,
    IgxFilterModule,
    IgxForOfModule,
    IgxNavbarModule,
    IgxProgressBarModule,
    IgxSliderModule,
    IgxBottomNavModule,
    IgxTabsModule,
    IgxTimePickerModule,
    IgxToastModule
];

@NgModule({
    imports: igniteModules,
    exports: igniteModules
})
export class SharedModule {}
