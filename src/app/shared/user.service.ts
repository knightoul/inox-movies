import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: firebase.User | null = null;
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((user) => {
      this.user = user;
    });
  }
}
