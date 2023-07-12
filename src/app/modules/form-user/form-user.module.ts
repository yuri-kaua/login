import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormUserRoutingModule } from './form-user-routing.module';
import { FormUserComponent } from './form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [FormUserComponent],
  imports: [
    CommonModule,
    FormUserRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class FormUserModule {}
