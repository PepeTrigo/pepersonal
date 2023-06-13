import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { UiChecklistComponent } from './ui-checklist/ui-checklist.component';
import { UiDropdownComponent } from './ui-dropdown/ui-dropdown.component';
import { UiOptionComponent } from './ui-dropdown/ui-option/ui-option.component';

@NgModule({
  declarations: [
    UiChecklistComponent,
    UiDropdownComponent,
    UiOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UiChecklistComponent,
    UiDropdownComponent,
    UiOptionComponent
  ]
})

export class UiComponentsModule {}
