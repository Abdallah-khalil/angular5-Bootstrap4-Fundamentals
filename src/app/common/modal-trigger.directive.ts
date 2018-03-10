import { Directive, OnInit, Inject, ElementRef, Input } from '@angular/core';
import { JQ_TOKEN } from './services/jquery.service';

@Directive({
  selector: '[evModalTrigger]'
})
export class ModalTriggerDirective implements OnInit {
  el: HTMLElement;
  @Input() modalId: string;
  constructor(private elRef: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.addEventListener('click', e => {
      this.$(`#${this.modalId}`).modal({});
    });
  }
}
