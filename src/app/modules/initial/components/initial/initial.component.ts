import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserService } from '@initial/infrastructure/services/create-user.service';
import { InitialFormManagerService } from '@initial/infrastructure/services/initial-form.manager.service';

@Component({
    selector: 'app-initial',
    templateUrl: './initial.component.html',
    styleUrls: ['./initial.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialComponent {
    constructor(
        private initialFormManagerService: InitialFormManagerService,
        private createUserService: CreateUserService,
        private router: Router,
    ) {}

    public getForm(): FormGroup {
        return this.initialFormManagerService.getFormInstance();
    }

    public isFormValid(): boolean {
        return this.initialFormManagerService.isFormValid();
    }

    public handleSubmit(): void {
        this.createUserService.createUser();
        this.router.navigate(['/weather']);
    }
}
