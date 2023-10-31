import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {NgxMatDrmCountriesFlagsModule} from 'ngx-mat-drm-countries-flags';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSelectModule,
    RecaptchaModule,
    // NgxMatDrmCountriesFlagsModule,
    MatCheckboxModule,
    NgxIntlTelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
