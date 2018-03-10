import { Component, OnInit } from '@angular/core';
import { EventsService } from '../event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from '../event.model';

@Component({
  selector: 'ev-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string;
  sortBy: string;
  constructor(private EventSvc: EventsService, private route: ActivatedRoute) {}

  addSession(): void {
    this.addMode = true;
  }

  saveNewSession($event: ISession): void {
    const maxId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    $event.id = maxId + 1;
    this.event.sessions.push($event);
    this.EventSvc.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession(): void {
    this.addMode = false;
  }

  ngOnInit() {
    this.filterBy = 'all';
    this.sortBy = 'votes';

    this.route.params.forEach((params: Params) => {
      this.event = this.EventSvc.getEvent(+params['id']);
      this.addMode = false;
    });

  }
}
