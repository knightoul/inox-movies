import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email: string = '';
  passwd: string = '';

  constructor(private auth: AuthService) {}

  register(): void {
    if (this.email == '') {
      alert('please enter email');
      return;
    }

    if (this.passwd == '') {
      alert('please enter passwd');
      return;
    }

    this.auth.register(this.email, this.passwd);
    this.email = '';
    this.passwd = '';
  }

  confirm_password(passwd: string):void{
    if(this.passwd === passwd){
    }
  }
}
