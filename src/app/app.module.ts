import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResetPasswordPageComponent } from './reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { ConsultPageOnlineComponent } from './consult-page-online/consult-page-online.component';
import { ConsultPhysicalComponent } from './consult-physical/consult-physical.component';
import { CartPageComponent } from './cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    ConsultPageOnlineComponent,
    ConsultPhysicalComponent,
    CartPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
