import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { EditSchemaComponent } from './edit-schema/edit-schema.component';


@NgModule({
    declarations: [
        EditSchemaComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        EditSchemaComponent
    ]
})

export class EditModuleComponents { }
