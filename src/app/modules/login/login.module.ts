import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { StepsModule } from 'primeng/steps';

import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    StepsModule,
    FormsModule,
    ToastModule,
    CardModule,
  ],
})
export class LoginModule {}
