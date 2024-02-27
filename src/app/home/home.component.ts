import { Component } from '@angular/core';
import { DataService } from '../shared/static.data/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public dataService: DataService) {}
}
