import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private fireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.fireAuth.authState.subscribe((res) => {
      if (res) {
        this.router.navigate(['dashboard']);
      }
    });
  }

  ngOnInit(): void {
    /*if (this.userService.user) {
      console.log('UID: ', this.userService.user.uid);
      console.log('EMAIL: ', this.userService.user.email);
      this.router.navigate(['dashboard']);
    }*/
    /* this.fireAuth.authState.subscribe((user) => {
       console.log('-------------------------------------');
       console.log(user);
       console.log('-------------------------------------');
     });
     */
  }

  login(): void {
    if (this.email == '') {
      alert('please enter email');
      return;
    }

    if (this.password == '') {
      alert('please enter passwd');
      return;
    }

    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
  signInWithGoogle() {
    this.auth.googleSignIn();
  }
}
