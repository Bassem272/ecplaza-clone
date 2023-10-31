import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.scss']
})
export class Register3Component {

  registerForm: FormGroup;


  constructor(
    private _snackBar: MatSnackBar,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
          ),
        ],
      ],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      password:['',Validators.required],
      confirmPassword:['',Validators.required],
      companyName: [''],
      userType: ['', Validators.required],
      userRole: ['', Validators.required],
      // email:['',Validators.email],

      address: ['', Validators.required],
      tel: ['', Validators.required],
      city: [''],
      state: [''],
      zip: [''],
      message: [''],
      // recaptcha: ['', [Validators.required], [this.ReCaptchaV3Service.validate()]]
    });
  }
  onSubmit(): void {
    console.log('Submit');

    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
    const order = {
      order_status: 'pending',
      customer_name:
        this.registerForm.value.firstName + this.registerForm.value.lastName,
      customer_phone: this.registerForm.value.phone,
      customer_email: this.registerForm.value.email,
      customer_address: this.registerForm.value.address,
    };
  }
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
