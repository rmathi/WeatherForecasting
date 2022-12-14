import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';

import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
      FlexLayoutModule
    ]
})
export class HeaderModule { }
