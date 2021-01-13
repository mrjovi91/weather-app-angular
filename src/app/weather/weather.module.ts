import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';




@NgModule({
  declarations: [HomeComponent, SettingsComponent],
  imports: [
    CommonModule
  ]
})
export class WeatherModule { }
