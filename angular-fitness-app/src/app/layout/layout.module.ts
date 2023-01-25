import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationTitleComponent } from './navigation-title/navigation-title.component';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { FrameComponent } from './frame/frame.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsShortenComponent } from './settings-shorten/settings-shorten.component';
import { MenuComponent } from './menu/menu.component';
import { SharedModule } from '../shared/shared.module';
import { AppNavComponent } from './app-nav/app-nav.component';

@NgModule({
  declarations: [
    AppNavComponent,
    NavigationBarComponent,
    NavigationTitleComponent,
    FrameComponent,
    SettingsComponent,
    NotificationsComponent,
    SettingsShortenComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [
    AppNavComponent
  ]
})
export class LayoutModule { }
