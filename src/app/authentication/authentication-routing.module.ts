import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'',redirectTo:'register',pathMatch:'full'},
  {
    path:'register2', component:Register2Component
  },{
    path:'register3', component:Register3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
