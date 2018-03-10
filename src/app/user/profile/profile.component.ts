import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Form, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TOASTER_TOKEN } from '../../common/services/toastr.service';

@Component({
  selector: 'ev-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(
    private AuthSvc: AuthService,
    private router: Router,
    @Inject(TOASTER_TOKEN) private toastr: Toastr
  ) {}

  cancel(): void {
    this.router.navigate(['events']);
  }

  saveProfile(form: any): void {
    if (this.profileForm.valid) {
      this.AuthSvc.updateCurrentUser(form.value.firstName, form.value.lastName);
      this.toastr.success('profile saved');
      // this.router.navigate(['events']);
    }
  }

  ngOnInit() {
    this.profileForm = new FormGroup({
      firstName: new FormControl(this.AuthSvc.currentUser.firstName, [
        Validators.required,
        Validators.pattern('[a-zA-Z].*')
      ]),
      lastName: new FormControl(
        this.AuthSvc.currentUser.lastName,
        Validators.required
      )
    });
  }
}
