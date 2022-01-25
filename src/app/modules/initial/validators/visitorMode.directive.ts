import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const visitorModeValidator: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    const name: AbstractControl | null = control.get('name');
    const visitorMode: AbstractControl | null = control.get('visitorMode');

    const validationError = { fieldsNotFilled: true };

    if (name === null || visitorMode === null) {
        return validationError;
    }

    if (visitorMode.value === true) {
        name.setErrors(null);
    }

    return name.value || visitorMode.value === true ? null : validationError;
};
