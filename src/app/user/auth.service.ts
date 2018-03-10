import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  constructor() {}

  loginUser(userName: string, password: string): void {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'polla',
      lastName: 'nada'
    };
  }

  updateCurrentUser(firstName: string, lastName: string): void {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
