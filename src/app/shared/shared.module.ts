import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { EnumDetailComponent } from './ui/enum/enum-detail/enum-detail.component';

@NgModule({
  declarations: [EnumDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  exports: [
    EnumDetailComponent
  ]
})
export class SharedModule { }
