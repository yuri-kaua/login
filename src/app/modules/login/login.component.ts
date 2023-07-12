import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailInput: string = '';
  passwordValid: string = '';

  constructor(private messageService: MessageService, private route: Router) {}
  ngOnInit(): void {}

  ValidEmail(email: string) {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailInput = regexEmail.test(this.emailInput);
  }

  ValidPassword(senha: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    const passwordValid = regex.test(this.passwordValid);
  }

  openLogin() {
    if (this.passwordValid.length < 6) {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Senha deve conter pelo menos 6 digitos',
      });
    }
    if (this.passwordValid.length > 5) {
      this.messageService.add({
        severity: 'success',
        summary: 'success',
        detail: 'Senha confirmada com sucesso',
      });
    }
  }

  register() {
    this.route.navigate(['formUser']);
    console.log('teste');
  }

  forgotPass() {
    this.route.navigate(['recoverPassword']);
    console.log('teste2');
  }
}
