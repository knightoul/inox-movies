import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  @Input('src') imgURL: string | null = null;
  @Input('place') location: string | null = null;
  constructor() {}
}
