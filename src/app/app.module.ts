import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { ConsultPageOnlineComponent } from './pages/account/consult-page-online/consult-page-online.component';
import { ConsultPhysicalComponent } from './pages/account/store/consult-physical/consult-physical.component';
import { CartPageComponent } from './pages/account/store/cart-page/cart-page.component';


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
