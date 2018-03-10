import { Component, OnInit } from '@angular/core';
import { EventsService } from './event.service';
// import { ToastrService } from '../common/services/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './event.model';

@Component({
  selector: 'ev-events-list',
  templateUrl: 'events.component.html',
  styles: [
    ` .card {
      min-height:330px;
    } `
  ]
})
export class EventsComponent implements OnInit {
  constructor(
    private eventSvc: EventsService,
    // private toastrSvc: ToastrService,
    private route: ActivatedRoute
  ) {}
  events: IEvent[];

  handleClick(): void {
    console.log();
  }

  /* handleThumbnailClick(name: string): void {
    this.toastrSvc.success(name);
  } */

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }
}
