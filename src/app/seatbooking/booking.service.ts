import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { Seat } from './seat.type';

@Injectable({
  providedIn: 'root',
})
export class BookingService implements OnInit {
  constructor() {}

  onCheck: EventEmitter<Seat> = new EventEmitter<Seat>();
  onUnCheck: EventEmitter<Seat> = new EventEmitter<Seat>();

  ngOnInit(): void {}
}
