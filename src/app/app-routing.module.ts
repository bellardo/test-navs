import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home.component';
import {NavComponent} from './nav.component';

import {EnumDetailComponent} from './shared/ui/enum/enum-detail/enum-detail.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "home"},
  {path: "home", component: HomeComponent},
  {path: "nav", component: NavComponent},
  {path: "enum", component: EnumDetailComponent},
  {
    path: 'utils',
    loadChildren: './utils/utils.module#UtilsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
