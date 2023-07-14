import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';

// Your component code

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  formSignup!: FormGroup;
  checkPassword: string = '';

  constructor(
    // private formControl: FormControl,
    // private formGroup: FormGroup,
    private fb: FormBuilder // private rtfm: FormsModule // private validators: Validators,
  ) {
    this.formSignup = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      cpf: new FormControl(''),
      fone: new FormControl(''),
      data_nascimento: new FormControl(''),
      password: new FormControl(''),
      conf_password: new FormControl(''),
    });
  }

  ngOnInit() {
    this.formSignup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators, this.validarEmail()],
      cpf: ['', Validators.required],
      fone: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      password: ['', Validators.required],
      conf_password: ['', Validators.required],
    });
  }

  validarEmail() {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regexEmail;
  }

  showCadastro() {}
}
