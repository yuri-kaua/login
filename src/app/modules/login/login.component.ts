import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailCheckRegex: boolean = true;
  passwordCheck: boolean = true;
  visible: boolean = false;
  login: FormGroup;

  constructor(private messageService: MessageService, private route: Router) {
    this.login = new FormGroup({
      email: new FormControl('', Validators.required),
      senha: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {}

  ValidEmail() {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    console.log(regexEmail);

    if (regexEmail.test(this.login.value.email!)) {
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: 'email valido',
      });
      // this.emailCh
    }
    if (!regexEmail.test(this.login.value.email!)) {
      this.emailCheckRegex = false;
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'erro, email invalido',
      });
    }
  }

  ValidPassword() {
    const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    console.log(regexPassword);

    if (regexPassword.test(this.login.value.email!)) {
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: 'senha Valida',
      });
    }
    if (!regexPassword.test(this.login.value.senha!)) {
      this.passwordCheck = false;
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'error, senha invalida',
      });
    }
  }

  openLogin() {}

  register() {
    this.route.navigate(['formUser']);
    console.log('teste');
  }

  forgotPass() {
    this.visible = true;
  }
}
