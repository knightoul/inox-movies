import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  // login method
  login(email: string, passwd: string) {
    this.fireauth.signInWithEmailAndPassword(email, passwd).then(
      () => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        alert('something went wrong');
        this.router.navigate(['/login']);
      }
    );
  }

  // register method
  register(email: string, passwd: string) {
    this.fireauth.createUserWithEmailAndPassword(email, passwd).then(
      () => {
        alert('register sucessfully');
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err.message);
        alert(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  // signOut method
  logout() {
    this.fireauth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      (err) => {
        alert('logout faild');
      }
    );
  }
}
