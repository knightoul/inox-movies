import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CinemaHallComponent } from './cinema-hall.component';

describe('CinemaHallComponent', () => {
  let component: CinemaHallComponent;
  let fixture: ComponentFixture<CinemaHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CinemaHallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CinemaHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
