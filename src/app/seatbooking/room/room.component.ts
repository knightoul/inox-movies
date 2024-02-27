import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css',
})
export class RoomComponent implements OnInit {
  rows = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  );
  columns = Array.from({ length: 20 }, (_, i) => i + 1);
  seats: string[][] = this.generateSeats();

  constructor() {}

  ngOnInit(): void {}

  generateSeats(): string[][] {
    return this.rows.map((row) => this.columns.map((col) => `${row}${col}`));
  }
}
