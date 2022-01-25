import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
    ],
    exports: [
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
    ],
})
export class MaterialModule {}
