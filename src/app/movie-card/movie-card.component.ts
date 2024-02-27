import { Component, Input } from '@angular/core';
import { UserchoiceService } from '../shared/userchoice.service';
import { Router } from '@angular/router';
import { Movie } from '../shared/static.data/movie.type';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input('movie') movie?: Movie;

  constructor(
    private userchoiceService: UserchoiceService,
    private router: Router
  ) {}
  bookTickets() {
    this.userchoiceService.movie = this.movie;
    this.router.navigate(['/booking']);
  }
}
