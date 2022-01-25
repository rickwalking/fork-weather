import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InitialFormManagerService } from '@initial/services/initial-form.manager.service';

@Component({
    selector: 'app-initial',
    templateUrl: './initial.component.html',
    styleUrls: ['./initial.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InitialComponent {
    constructor(private initialFormManagerService: InitialFormManagerService) {}

    public getForm(): FormGroup {
        return this.initialFormManagerService.getFormInstance();
    }

    public isFormValid(): boolean {
        return this.initialFormManagerService.isFormValid();
    }
}
