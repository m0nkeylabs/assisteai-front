import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import * as fromHomeStore from 'app/home/store';

import {
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatChipsModule,
  MatButtonModule,
  MatDialogModule,
  MatSelectModule,
  MatTooltipModule
} from '@angular/material';

import {
  ToastrModule,
  ToastNoAnimationModule,
} from 'ngx-toastr';

import { CustomSerializer, metaReducers, rootReducer } from './sotre.config';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';

import { AppComponent } from 'app/app.component';
import { HeaderComponent } from '@main';
import { HomeComponent } from 'app/home/home.component';
import { IndicateComponent } from 'app/indicate/indicate.component';

import { HomeService } from '@services/home.service';
import { TokenService } from '@services/token.service';

import { LoadingComponent } from '@shared/components';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    IndicateComponent,
    LoadingComponent,
    LoginComponent
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
    MatSelectModule,

    ToastNoAnimationModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      preventDuplicates: true
    }),

    StoreModule.forRoot(rootReducer, { metaReducers }),
    StoreModule.forFeature('homeList', fromHomeStore.reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([...fromHomeStore.effects]),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
  entryComponents: [IndicateComponent, LoginComponent],
  providers: [HomeService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
