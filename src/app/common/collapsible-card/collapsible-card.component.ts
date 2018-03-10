import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ev-collapsible-card',
  templateUrl: './collapsible-card.component.html',
  styleUrls: ['./collapsible-card.component.css']
})
export class CollapsibleCardComponent implements OnInit {

  visible: boolean;
  constructor() {}

  toggleContent() {
    this.visible = !this.visible;
  }

  ngOnInit() {

  }
}
