import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Output('loginClick') click: EventEmitter<null> = new EventEmitter();

  constructor() {}

  createEvent() {
    this.click.emit();
  }
}
