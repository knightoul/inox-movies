import { Component } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { UserService } from '../../shared/user.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-overlay',
  templateUrl: './login-overlay.component.html',
  styleUrl: './login-overlay.component.scss',
})
export class LoginOverlayComponent {
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

  ngOnInit(): void {}

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
