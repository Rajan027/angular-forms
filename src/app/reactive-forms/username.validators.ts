import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
  static cannotContainSapce(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(" ") >= 0) {
      return { connotContainSpace: true };
    }
    return null;
  }
}
