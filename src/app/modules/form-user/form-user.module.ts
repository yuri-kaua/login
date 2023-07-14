import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUserRoutingModule } from './form-user-routing.module';
import { FormUserComponent } from './form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    FormUserRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule,
  ],
})
export class FormUserModule {}
