import { CreateEventComponent } from './create-event/create-event.component';
import { InjectionToken } from '@angular/core';

export const CHECKDIRTYSTATE = new InjectionToken('checkDirtyState');

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'you have not saved this event , do you want to cancel ?'
    );
  }
  return true;
}
