import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession } from '../events/event.model';
import { EventsService } from '../events/event.service';

@Component({
  selector: 'ev-nav',
  templateUrl: 'nav.component.html'
})
export class NavComponent implements OnInit {
  searchTerm: string;
  foundSessions: ISession[];

  constructor(public AuthSvc: AuthService, private eventSvc: EventsService) {}

  searchSession() {
    this.eventSvc.searchSessions(this.searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
      console.log(sessions);
    });
  }

  ngOnInit() {}
}
