import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventsService } from './event.service';

@Injectable()
export class EventRouteActivatorGuard implements CanActivate {
  constructor(private eventSvc: EventsService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const eventExists = !!this.eventSvc.getEvent(+next.params['id']);
    if (eventExists) {
      return true;
    } else {
      this.router.navigate(['/404']);
      return false;
    }
  }
}
