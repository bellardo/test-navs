import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NavComponent } from './nav.component';
import { HeaderComponent } from './header.component';

//import { ConfigService } from './config.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    //ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
