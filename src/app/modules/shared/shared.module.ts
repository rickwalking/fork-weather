import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from '@shared/material/material.module';
import { ShowNamePipe } from '@shared/infrastructure/pipes/name.pipe';

@NgModule({
    declarations: [HeaderComponent, ShowNamePipe],
    imports: [CommonModule, MaterialModule],
    exports: [HeaderComponent, ShowNamePipe],
})
export class SharedModule {}
