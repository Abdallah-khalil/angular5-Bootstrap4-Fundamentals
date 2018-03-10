import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../event.service';

@Component({
  selector: 'ev-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private router: Router, private EventSvc: EventsService) {}

  createEvent(formValue): void {
    this.EventSvc.createEvent(formValue);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }

  cancel(): void {
    this.router.navigate(['/events']);
  }
  ngOnInit() {}
}
