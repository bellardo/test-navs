import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilsRoutingModule } from './utils-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CalcComponent } from './calc.component';
import { TrimComponent } from './trim.component';
//import { UtilsComponent } from './utils.component';
//, UtilsComponent

@NgModule({
  declarations: [CalcComponent, TrimComponent],
  imports: [
    CommonModule,
    UtilsRoutingModule,
    SharedModule
  ]
})
export class UtilsModule { }
