import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { LoginModule } from './modules/login/login.module';
import { FormUserComponent } from './modules/form-user/form-user.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login-routing.module').then(
        (m) => m.LoginRoutingModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    component: FormUserComponent,
  },
  {
    path: 'form-user',
    loadChildren: () =>
      import('./modules/form-user/form-user-routing.module').then(
        (m) => m.FormUserRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
