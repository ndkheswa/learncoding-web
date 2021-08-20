import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../shared/dialogs/success-dialog/success-dialog.component';
import { User } from 'src/app/models/user.model';
import { ErrorHandlerService } from 'src/app/services/errors/error-handler.service';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterLoginComponent implements OnInit {

  public registerForm: FormGroup;
  private dialogConfig;

  constructor(private userService: UserService, private dialogRef: MatDialogRef<SuccessDialogComponent>,
              private dialog: MatDialog, private location: Location, @Inject(MAT_DIALOG_DATA) public data: any,
              private errorService: ErrorHandlerService) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      username: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }

  public registerClient = (registerFormValue) => {
    if (this.registerForm.valid) {
      this.register(registerFormValue);
    }
  }

  public register = (registerFormValue) => {

    const user: User = {
      id: registerFormValue.id,
      fullname: registerFormValue.fullname,
      username: registerFormValue.username,
      password: registerFormValue.password
    };

    this.userService.register(user)
      .subscribe(
        result => {
          this.dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

          this.dialogRef.afterClosed()
            .subscribe(() => {
              this.location.go('/login');
            });
        },
        (error => {
          this.errorService.dialogConfig = { ...this.dialogConfig };
          this.errorService.handleError(error);
        })
      );
  }

}
