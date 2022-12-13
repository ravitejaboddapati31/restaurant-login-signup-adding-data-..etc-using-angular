import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaruentDashComponent } from './restaruent-dash/restaruent-dash.component';//my
import { LoginComponent } from './login/login.component';//my
import { FormsModule, ReactiveFormsModule } from '@angular/forms';//my
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './signup/signup.component'//my
@NgModule({
  declarations: [
    AppComponent,
    RestaruentDashComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
