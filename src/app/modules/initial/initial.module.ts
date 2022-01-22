import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InitialComponent } from '@initial/components/initial/initial.component';

@NgModule({
    declarations: [InitialComponent],
    imports: [CommonModule],
    exports: [InitialComponent],
})
export class InitialModule {}
