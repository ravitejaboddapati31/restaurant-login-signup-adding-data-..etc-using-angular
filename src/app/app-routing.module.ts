import { LocationStrategy } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RestaruentDashComponent } from './restaruent-dash/restaruent-dash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'restaurant',component:RestaruentDashComponent},
  {path:'login', component: LoginComponent},
  {path:'signup',component:SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
