import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import {MatListModule} from '@angular/material/list';
import {SharedModule} from '../shared/shared.module';
import { CardComponent } from './card/card.component'




@NgModule({
  declarations: [HomeComponent, SettingsComponent, CardComponent],
  imports: [
    CommonModule,
    MatListModule,
    SharedModule
  ],
  exports:
  [
    MatListModule
  ]
})
export class WeatherModule { }
