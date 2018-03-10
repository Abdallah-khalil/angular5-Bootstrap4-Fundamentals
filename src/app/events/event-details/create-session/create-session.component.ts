import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ISession } from '../../event.model';

@Component({
  selector: 'ev-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {
  newSessionForm: FormGroup;
  @Output() saveNewSession = new EventEmitter();
  @Output() cancelNewSession = new EventEmitter();
  constructor() {}

  newSession(formValues): void {
    const session: ISession = {
      id: undefined,
      name: formValues.name,
      duration: formValues.duration,
      level: formValues.level,
      presenter: formValues.presenter,
      abstract: formValues.abstract,
      voters: []
    };

    this.saveNewSession.emit(session);
  }
  cancel(): void {
    this.cancelNewSession.emit();
  }

  private restrictWords(words: string[]) {
    return (control: FormControl): { [key: string]: string } => {
      // tslint:disable-next-line:curly
      if (!words) return null;

      const invalidWords = words
        .map(w => (control.value.includes(w) ? { restrictWords: w } : null))
        .filter(w => w != null);

      return invalidWords && invalidWords.length > 0
        ? { restrictWords: invalidWords.join(', ') }
        : null;
    };
  }
  ngOnInit() {
    this.newSessionForm = new FormGroup({
      name: new FormControl('', Validators.required),
      presenter: new FormControl('', Validators.required),
      duration: new FormControl('', Validators.required),
      level: new FormControl('', Validators.required),
      abstract: new FormControl('', [
        Validators.required,
        Validators.maxLength(400),
        this.restrictWords(['foo', 'bar'])
      ])
    });
  }
}
