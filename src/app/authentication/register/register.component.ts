import { RegisterService } from './../../services/register.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as intlTelInput from 'intl-tel-input';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input';
// import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { countries } from 'src/app/services/country-data.service';

import { ReCaptchaComponent } from 'angular2-recaptcha';
import { ReCaptchaV3Service } from '../../../../node_modules/ngx-captcha/ngx-captcha';
import { RecaptchaModule } from 'ng-recaptcha/lib/recaptcha.module';
// import { ReCaptchaV3Response } from '../../../../node_modules/ngx-captcha/lib/captcha-v3

import { AbstractControl, ValidatorFn } from '@angular/forms';

import { ValidationErrors } from '@angular/forms';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { matchPasswordAsync } from './confirm-password';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  public countries: any = countries;
  ReCaptchaV3Service: any;
  // siteKey: string | undefined;
  // this.siteKey = "your-actual-site-key";
  siteKey = '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

  // ------------ one captcha section?++++++++++++++++++++++++++++
  captcha: string;
  email: string;
  public isCaptchaClicked: boolean = false;

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved witht the response' + captchaResponse);
    this.isCaptchaClicked = true;
  }

  isCaptchaValidated = false;

  //   @ViewChild(ReCaptchaComponent)
  //   captcha!: ReCaptchaComponent;

  // onCaptchaResponse(event: any) {
  //   this.isCaptchaValidated = true;
  // }

  // ------------?+++++ confirm password section+++++++++++++++++++++++
  // name = 'Angular ' + VERSION.major;
  //   passwordsMatching = false;
  //   isConfirmPasswordDirty = false;
  //   confirmPasswordClass = 'form-control';
  //   newPassword = new FormControl(null, [
  //     (c: AbstractControl) => Validators.required(c),
  //     Validators.pattern(
  //       /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
  //     ),
  //   ]);
  //   confirmPassword = new FormControl(null, [
  //     (c: AbstractControl) => Validators.required(c),
  //     Validators.pattern(
  //       /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
  //     ),
  //   ]);

  ngOnInit(): void {
    const inputElement = document.querySelector('#phone');
    if (inputElement) {
      intlTelInput(inputElement, {
        initialCountry: 'US',
        separateDialCode: true,
        utilsScript:
          'https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js',
      });
    }
  }

  passwordsMatchValidator(control: FormGroup) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { mismatch: true };
  }

  registerForm: FormGroup;

  constructor(
    private _snackBar: MatSnackBar,
    private registerService: RegisterService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.captcha = '';
    this.email = 'aabassadkfdsafdkajskdj';

    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            // ,
            // Validators.pattern(
            //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            // ),
          ],
        ],
        country: ['', Validators.required],
        // phone: ['', Validators.required],
        phone: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^\d{10}$/ // Adjust the pattern as needed for your phone number format
            ),
          ],
        ],
        // password: ['', Validators.required],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#\$%\^&\*\(\)_\+{}\[\]:;<>,\.?~\\`/-])/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required], matchPasswordAsync],
        companyName: ['', Validators.required],
        userType: ['', Validators.required],
        userRole: ['', Validators.required],
        recaptcha: ['', [Validators.required]],
        address: ['', Validators.required],
        tel: ['', Validators.required],

        // recaptcha: ['', [Validators.required], [this.ReCaptchaV3Service.validate()]]
      },
      {
        validator: this.ConfirmedValidator('password', 'confirmPassword'),
      }
    );
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
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

  ///// =========>>>>>>>> the telephone part !!!!

  separateDialCode = false;
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [
    CountryISO.UnitedStates,
    CountryISO.UnitedKingdom,
  ];
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.India, CountryISO.Canada];
  }
  // Create a form control instance
  phoneControl = new FormControl();
  myForm = new FormGroup({
    phone: this.phoneControl,
  });
  ///////======>>>>>

  selectedValue: string | undefined;
  selectedCar: string | undefined;
  // hasErrors(): any {
  //   return (
  //     this.registerForm.get('username')?.invalid ||
  //     this.registerForm.get('email')?.invalid ||
  //     this.registerForm.get('password')?.invalid
  //   );
  // }
  hasErrors(): any {
    for (const controlName in this.registerForm.controls) {
      if (this.registerForm.get(controlName)?.invalid) {
        return true;
      }
    }
    return false;
  }
}
