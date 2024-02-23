import { Injectable, OnInit } from '@angular/core';
import { Place } from '../types/place';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class LocationService implements OnInit {
  public places: Place[] | null = null;

  constructor(private afs: AngularFirestore) {}

  ngOnInit(): void {}
}
