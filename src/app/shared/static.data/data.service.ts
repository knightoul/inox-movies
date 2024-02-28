import { Injectable } from '@angular/core';
import { Movie } from './movie.type';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  movies: Movie[] = [
    // {name:'', category:'', lang:'', poster:''},
    {
      name: 'Avatar The Way Of Water',
      category: 'scifi',
      lang: 'English',
      poster:
        'https://firebasestorage.googleapis.com/v0/b/inox-movies.appspot.com/o/poster%2Favatar%20the%20way%20of%20water.jpg?alt=media&token=83713415-5b57-439d-a9f1-e78ba72c0ef6',
    },
    {
      name: 'MEG 2 The Trench',
      category: 'action, thrieller',
      lang: 'English',
      poster:
        'https://firebasestorage.googleapis.com/v0/b/inox-movies.appspot.com/o/poster%2Fmeg2.jpg?alt=media&token=7febf6e2-1abd-466e-9466-b9c83f2d99de',
    },
    {
      name: 'Article 370',
      category: 'Drama',
      lang: 'Hindi',
      poster:
        'https://firebasestorage.googleapis.com/v0/b/inox-movies.appspot.com/o/poster%2Fariticle_370.jpg?alt=media&token=193febc2-cc80-4dde-8f2d-5a17957906e3',
    },
    {
      name: 'Avengers',
      category: 'Action, Scifi',
      lang: 'English',
      poster:
        'https://firebasestorage.googleapis.com/v0/b/inox-movies.appspot.com/o/poster%2Favengers.webp?alt=media&token=d1b667a2-3da2-4652-9a85-2797e858c7e3',
    },
    { name: 'Tiger 3', category: 'Action', lang: 'Hindi', poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcStd1La0J7pfDW52SBnOwrpqG6hTqYDkAUEf1yPGyuZHBORvM_Z' },
    { name: 'King Kong', category: 'Action,Horror', lang: ' English', poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcScKmbrbsydfII7jY2nhc9Qo8YYFRk0TFaydwrArnP1pf1A6l76' },
    { name: 'Boss Baby', category: 'Comedy,Adventure', lang: 'English', poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQoXtgMlVpiOtLWBSauHiGoZfQsMRVU3l4Ep2hJ8KDUEYqqFwMu' },
    { name: 'Megamind', category: 'Comedy,Adventure', lang: 'English', poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjXH9lRlNT2lUhFNNho5OMwLXcQYj7sSXMmjFipBrCa90oBeVB' },
    { name: 'Big Hero 6', category: 'Action,Comedy', lang: 'Hindi', poster: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTwXEBTWUMWaM9gerkiSgcsSDDcKG7Jk-Fvq5cPzo29sjVdicWc' },
    { name: 'Dora and the Lost City of Gold', category: 'Adventure,Comedy', lang: 'Hindi', poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwVpc3XI5AWKyp-gEpPDBqM5IH8U6q2C3-x53dMsadQKsUqIee' },
  ];
  constructor() { }
}
