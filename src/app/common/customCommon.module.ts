import { NgModule } from '@angular/core';
import { CollapsibleCardComponent } from './collapsible-card/collapsible-card.component';
import { CommonModule } from '@angular/common';
import { DurationPipe } from './duration.pipe';

import { TOASTER_TOKEN } from './services/toastr.service';
import { JQ_TOKEN } from './services/jquery.service';
import { SimpleModalComponent } from './simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './modal-trigger.directive';
@NgModule({
  imports: [CommonModule],
  exports: [
    CollapsibleCardComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  declarations: [
    CollapsibleCardComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective
  ],
  providers: [
    {
      provide: TOASTER_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ]
})
export class CustomCommonModule {}
