import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormUserRoutingModule } from './form-user-routing.module';
import { FormUserComponent } from './form-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormUserComponent],
  imports: [CommonModule, FormUserRoutingModule, FormsModule],
})
export class FormUserModule {}
