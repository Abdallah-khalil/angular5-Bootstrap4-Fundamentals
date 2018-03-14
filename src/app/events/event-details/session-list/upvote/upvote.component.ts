import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ev-upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {
  @Input() count: number;
  @Input() voted: boolean;
  @Output() vote = new EventEmitter();
  constructor() {}

  onClick() {
    this.vote.emit({});
  }

  ngOnInit() {}
}
