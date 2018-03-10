import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from './event.model';

@Component({
  selector: 'ev-event-thumbnail',
  templateUrl: 'event-thumbnail.component.html'
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: IEvent;
  constructor() {}

  handleClick(): void {
    console.log('clicked');
  }
  ngOnInit() {}
}
