import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailInput: string = '';
  passwordValid: string = '';

  constructor(private messageService: MessageService) {}
  ngOnInit(): void {
    if (this.emailInput.length < 1) {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Campo obrigátorio não foi preenchido ',
      });
    }
  }

  ValidEmail(email: string) {
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailInput = regexEmail.test(this.emailInput);

    // if (this.emailInput) {
    //   this.messageService.add({
    //     severity: 'success',
    //     summary: 'success',
    //     detail: 'Sucesso',
    //   });
    // }

    if (this.emailInput === undefined) {
      this.messageService.add({
        severity: 'error',
        summary: 'error',
        detail: 'Coloque um E-mail válido',
      });
    }
  }

  ValidPassword(senha: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

    const passwordValid = regex.test(this.passwordValid);

    console.log(passwordValid);

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
        detail: 'Sucesso',
      });
    }
  }

  OpenForm() {}
}
