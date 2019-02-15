import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';



import {
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from 'app/app.component';
import { HeaderComponent } from '@main';
import { HomeComponent } from 'app/home/home.component';
import { IndicateComponent } from 'app/indicate/indicate.component';

import { HomeService } from '@services/home.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IndicateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule
  ],
  entryComponents: [IndicateComponent],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
