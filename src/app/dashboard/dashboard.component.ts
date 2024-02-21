import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  user: firebase.User | null = null;
  constructor(public auth: AuthService, private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe((res) => {
      this.user = res;
    });
  }
}
