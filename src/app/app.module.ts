import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthorizationInterceptor } from './layout/interceptor/http.interceptor';
import { AuthorizationInterceptorFn } from './layout/interceptor/authorizationInterceptor';


@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [provideHttpClient(withInterceptors([AuthorizationInterceptorFn]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
