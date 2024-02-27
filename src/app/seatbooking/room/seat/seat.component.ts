import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  Renderer2,
} from '@angular/core';
import { BookingService } from '../../booking.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.css',
})
export class SeatComponent implements AfterViewInit {
  @Input('seatno') seatNo!: string;
  @ViewChild('seat') seat?: ElementRef;

  constructor(
    private renderer: Renderer2,
    private bookingService: BookingService
  ) {}

  ngAfterViewInit(): void {
    console.log(this.seat);
  }

  returnSelfValue() {
    console.log(this.seatNo);
  }

  onSelect() {
    if (this.seat) {
      const element = this.seat.nativeElement;
      if (element.classList.contains('selected')) {
        this.renderer.removeClass(element, 'selected');

        // emit unCheck event.
        this.bookingService.onUnCheck.emit({
          no: this.seatNo,
          price: 100,
        });
      } else {
        this.renderer.addClass(element, 'selected');

        // emit check event
        this.bookingService.onCheck.emit({
          no: this.seatNo,
          price: 100,
        });
      }
    }
  }
}
