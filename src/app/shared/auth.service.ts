import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { UserService } from './user.service';
import firebase from 'firebase/compat';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(
    private fireAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {}
  login(email: string, passwd: string) {
    this.fireAuth.signInWithEmailAndPassword(email, passwd).then(
      (user) => {
        localStorage.setItem('token', JSON.stringify(user.user?.uid));
        console.log('Login sucessfull');
        console.log(user);
        if (user.user?.emailVerified == true) {
          this.router.navigate(['/dashboard']);
        } else {
          this.verifyEmail(user.user);
          this.router.navigate(['/verify']);
        }
      },
      (err: Error) => {
        console.error(err.message);
        this.router.navigate(['/login']);
      }
    );
  }

  register(email: string, passwd: string) {
    this.fireAuth.createUserWithEmailAndPassword(email, passwd).then(
      (user) => {
        if (user.user) {
          this.verifyEmail(user.user);
        }
        console.log(user);
      },
      (err: Error) => {
        console.error(err.message);
        this.router.navigate(['/register']);
      }
    );
  }

  logout() {
    this.fireAuth.signOut().then(
      () => {
        localStorage.removeItem('token');
        this.router.navigate(['']);
      },
      (err: Error) => {
        console.error(err.message);
      }
    );
  }

  forgotpasswd(email: string) {
    this.fireAuth.sendPasswordResetEmail(email).then(
      () => {
        console.log('email sended..');
        this.router.navigate(['/verify']);
      },
      (err: Error) => {
        console.error(err.message);
      }
    );
  }

  verifyEmail(user: firebase.User | null) {
    user?.sendEmailVerification().then(
      (res: any) => {
        console.log(res);
        this.router.navigate(['/verify']);
      },
      (err: Error) => {
        console.error(err.message);
      }
    );
  }

  googleSignIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider()).then(
      (user: firebase.auth.UserCredential) => {
        console.log(user);
        this.userService.user = user.user;
        localStorage.setItem('token', JSON.stringify(user.user?.uid));
        this.router.navigate(['/dashboard']);
      },
      (err: Error) => {
        console.error(err.message);
      }
    );
  }
}
