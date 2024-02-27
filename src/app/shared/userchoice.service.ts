import { Injectable } from '@angular/core';
import { Seat } from '../seatbooking/seat.type';
import { Movie } from './static.data/movie.type';

@Injectable({
  providedIn: 'root',
})
export class UserchoiceService {
  movie?: Movie;
  constructor() {}
}
