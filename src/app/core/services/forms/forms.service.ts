import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class FormsService {

  constructor() { }

  markControlsAsTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).map((field) => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markControlsAsTouched(control);
      }
    });
  }

}
