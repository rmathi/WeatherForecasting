import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {FlexLayoutModule} from "@angular/flex-layout";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HeaderModule} from "./header/header.module";
import {LandingPageModule} from "./landing-page/landing-page.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    NgxChartsModule,

    HeaderModule,
    LandingPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
