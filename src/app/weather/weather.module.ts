import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [HomeComponent, SettingsComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports:
  [
    MatListModule
  ]
})
export class WeatherModule { }
