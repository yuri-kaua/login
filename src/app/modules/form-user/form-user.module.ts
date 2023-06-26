import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUserRoutingModule } from './form-user-routing.module';
import { FormUserComponent } from './form-user.component';


@NgModule({
  declarations: [
    FormUserComponent
  ],
  imports: [
    CommonModule,
    FormUserRoutingModule
  ]
})
export class FormUserModule { }
