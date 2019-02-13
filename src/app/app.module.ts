import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HeaderComponent } from '@main';
import { HomeComponent } from './home/home.component';

import { HomeService } from '@services/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    MatIconModule,
    MatTooltipModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
