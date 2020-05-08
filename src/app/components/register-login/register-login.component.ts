import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterLoginComponent implements OnInit {

  public clientForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.clientForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });
  }

  public login(clientFormValue) {
    // to be implemented
  }

}
