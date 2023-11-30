import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  captcha:string;
  email:string;
  registerForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private authService: AuthService,
    // private localStorageService: LocalStorageService
  ) {
    this.captcha = '';
    this.email='aabassadkfdsafdkajskdj';
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
        ],
      ],
    });
  }
  ngOnInit(): void {

  }
  resolved(captchaResponse:string){
    this.captcha=captchaResponse;
    console.log("resolved witht the response"+ captchaResponse);

  }

  onSubmit() {
    // if (this.registerForm && this.registerForm.valid) {
    //   // Your form submission logic here
    // }
    console.log(this.registerForm.value, typeof this.registerForm.value);

    const body = {
      name: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };
    console.log(body);
    // this.authService.register(body).subscribe(
    //   (res: any) => {
    //     console.log(res);
    //     //   this.localStorageService.set('customer', res.customer);
    //     this.localStorageService.set('token', res.token);
    //     this.localStorageService.set('user', res.user);

    //     console.log(this.localStorageService.get('token'));
    //     console.log(this.localStorageService.get('user'));
    //     if(res){
    //       this.router.navigate(['/auth/login']);

    //     }
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }
  // Method to check if there are any form control errors
  hasErrors(): any {
    return (
      this.registerForm.get('username')?.invalid ||
      this.registerForm.get('email')?.invalid ||
      this.registerForm.get('password')?.invalid
    );
  }
}
