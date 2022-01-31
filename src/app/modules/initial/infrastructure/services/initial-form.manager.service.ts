import { Injectable, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { visitorModeValidator } from '@initial/validators/visitorMode.directive';

import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InitialFormManagerService implements OnDestroy {
    private initialForm: FormGroup = this.formBuilder.group(
        {
            name: ['', [Validators.required, Validators.minLength(2)]],
            visitorMode: false,
        },
        { validators: visitorModeValidator },
    );
    private subscriptions: Subscription = new Subscription();
    private currentName: string = '';

    constructor(private formBuilder: FormBuilder) {
        this.handleVisitorModeValueChanges();
    }

    public ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    public getFormInstance(): FormGroup {
        return this.initialForm;
    }

    public isFormValid(): boolean {
        return this.initialForm.valid;
    }

    public resetForm(): void {
        this.getFormInstance().reset();
    }

    public setName(name: string): void {
        const control: AbstractControl | null = this.getFormInstance().get('name');

        if (control === null) {
            return;
        }

        control.setValue(name);
    }

    public setVisitorMode(visitorMode: boolean): void {
        const control: AbstractControl | null = this.getFormInstance().get('visitorMode');

        if (control === null) {
            return;
        }

        control.setValue(visitorMode);
    }

    public toggleNameControlAvailability(visitorMode: boolean): void {
        const control: AbstractControl | null = this.getFormInstance().get('name');

        if (control === null) {
            return;
        }

        visitorMode ? control.disable() : control.enable();
    }

    public getName(): string {
        const control: AbstractControl | null = this.getFormInstance().get('name');

        if (control === null) {
            return '';
        }

        return control.value;
    }

    private handleVisitorModeValueChanges(): void {
        const visitorMode: AbstractControl | null = this.getFormInstance().get('visitorMode');
        const name: AbstractControl | null = this.getFormInstance().get('name');

        if (visitorMode === null || name === null) {
            return;
        }

        this.subscriptions.add(
            visitorMode.valueChanges.subscribe({
                next: (updatedValue: boolean): void => {
                    this.toggleNameControlAvailability(updatedValue);

                    if (!updatedValue) {
                        name.setValue(this.currentName);
                        return;
                    }

                    this.currentName = name.value;
                    name.setValue('');
                },
            }),
        );
    }
}
