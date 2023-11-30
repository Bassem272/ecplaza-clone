import {MatProgressBarModule} from '@angular/material/progress-bar';

import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { Register2Component } from './register2/register2.component';
import { Register3Component } from './register3/register3.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { LoginComponent } from './login/login.component';

// import { NgxMatIntlTelInputModule } from 'ngx-mat-intl-tel-input';

@NgModule({
  declarations: [RegisterComponent, Register2Component, Register3Component, LoginComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    RecaptchaModule,
    MatProgressBarModule ,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,

    MatInputModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatRadioModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    NgxIntlTelInputModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AuthenticationModule {}
