import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RecaptchaFormsModule } from 'ng-recaptcha/lib/recaptcha.module';
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },{
    path:'shared',
    loadChildren:()=>import('./shared/shared.module').then((m)=>
    m.SharedModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
