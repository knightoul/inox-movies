import { Component } from '@angular/core';
import { BookingService } from './booking.service';
import { UserchoiceService } from '../shared/userchoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatbooking',
  templateUrl: './seatbooking.component.html',
  styleUrl: './seatbooking.component.css',
  providers: [BookingService],
})
export class SeatbookingComponent {
  constructor(
    private userchoiceService: UserchoiceService,
    private router: Router
  ) {
    if (!this.userchoiceService.movie) {
      this.router.navigate(['/']);
    }
  }
}
