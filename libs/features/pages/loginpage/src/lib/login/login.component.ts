import { Component,Input,Output, EventEmitter,NgModule } from '@angular/core';



import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'lucie-website-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  }


  @Output() submitEM = new EventEmitter();
}
