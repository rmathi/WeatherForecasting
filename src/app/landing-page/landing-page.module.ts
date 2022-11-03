import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {LandingPageRoutingModule} from "./landing-page-routing.module";
import { CityDetailsComponent } from './city-details/city-details.component';
import { WeatherPredictionComponent } from './weather-prediction/weather-prediction.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    LandingPageComponent,
    CityDetailsComponent,
    WeatherPredictionComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatListModule
  ]
})
export class LandingPageModule { }
