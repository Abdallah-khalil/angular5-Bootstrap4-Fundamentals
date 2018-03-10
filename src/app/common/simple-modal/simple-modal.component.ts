import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Inject
} from '@angular/core';
import { JQ_TOKEN } from '../services/jquery.service';

@Component({
  selector: 'ev-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent implements OnInit {
  @Input() title: string;
  @Input() modalId: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('modalContainer') modalEl: ElementRef;
  constructor(@Inject(JQ_TOKEN) private $: any) {}

  closeModal(): void {
    debugger;
    if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
      this.$(this.modalEl.nativeElement).modal('hide');
    }
  }

  ngOnInit() {}
}
