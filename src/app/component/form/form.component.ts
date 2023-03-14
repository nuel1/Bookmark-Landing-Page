import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  emailPattern: RegExp = /^\w+@[A-Za-z0-9]+?\.[A-Za-z]+$/;
  error = false;
  validateEmail(email: string) {
    this.emailPattern.test(email) ? (this.error = false) : (this.error = true);
  }
}
