import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from '@initial/components/initial/initial.component';
import { MaterialModule } from '@shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [InitialComponent],
    imports: [CommonModule, MaterialModule, ReactiveFormsModule],
    exports: [InitialComponent],
})
export class InitialModule {}
