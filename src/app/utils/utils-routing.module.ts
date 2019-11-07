import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { CommonModule } from '@angular/common';
//CommonModule,
//import { UtilsComponent } from './utils.component';
import { CalcComponent } from './calc.component';
import { TrimComponent } from './trim.component';
import { EnumDetailComponent } from '../shared/ui/enum/enum-detail/enum-detail.component';

const routes: Routes = [
  {
    path: '',
    //component: UtilsComponent,
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'calc'},
      {path: 'calc', component: CalcComponent},
      {path: 'trim', component: TrimComponent},
      {path: 'enum', component: EnumDetailComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilsRoutingModule { }
