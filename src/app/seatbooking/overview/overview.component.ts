import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { Seat } from '../seat.type';
import { UserchoiceService } from '../../shared/userchoice.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css',
})
export class OverviewComponent implements OnInit {
  checkedSeats: Seat[] = [];
  totalPrice: number = 0;
  constructor(
    private bookingService: BookingService,
    public userchoiceService: UserchoiceService
  ) {}
  ngOnInit(): void {
    this.bookingService.onCheck.subscribe((selectedSeat: Seat) => {
      if (this.checkedSeats.length != 10) {
        this.checkedSeats.push(selectedSeat);
        this.totalPrice += selectedSeat.price;
        console.log(this.checkedSeats);
      } else {
        alert("you can't select more than 10 seats at a time");
      }
    });
    this.bookingService.onUnCheck.subscribe((selectedSeat: Seat) => {
      this.checkedSeats = this.checkedSeats.filter(
        (seat) => seat.no !== selectedSeat.no
      );
      this.totalPrice -= selectedSeat.price;
      console.log(this.checkedSeats);
    });
  }
}
