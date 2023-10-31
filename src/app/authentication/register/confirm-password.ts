import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export function matchPasswordAsync(control: AbstractControl): Observable<ValidationErrors | null> {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return of({ password, confirmPassword }).pipe(
    map(values => {
      if (values.password !== values.confirmPassword) {
        return { passwordMismatch: true };
      }
      return null;
    })
  );
}
