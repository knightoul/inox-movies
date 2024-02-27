import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// USER defined
// enviroment
import { enviroment } from '../enviroments/enviroment';
// component
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowtimesComponent } from './showtimes/showtimes.component';
import { OffersComponent } from './offers/offers.component';
import { CinemasComponent } from './cinemas/cinemas.component';
import { LoginOverlayComponent } from './login/login-overlay/login-overlay.component';
import { CinemaHallComponent } from './cinemas/cinema-hall/cinema-hall.component';
import { HallsComponent } from './cinemas/cinema-hall/halls/halls.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ImageCarouselComponent } from './home/image-carousel/image-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { CinemaMoviesComponent } from './showtimes/cinema-movies/cinema-movies.component';
import { DateTimeComponent } from './showtimes/date-time/date-time.component';
import { DateComponent } from './showtimes/date-time/date/date.component';
import { TimeComponent } from './showtimes/date-time/time/time.component';
import { SeatbookingComponent } from './seatbooking/seatbooking.component';
import { RoomComponent } from './seatbooking/room/room.component';
import { SeatComponent } from './seatbooking/room/seat/seat.component';
import { OverviewComponent } from './seatbooking/overview/overview.component';

// services
import { UserchoiceService } from './shared/userchoice.service';
import { DataService } from './shared/static.data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    HomeComponent,
    NavbarComponent,
    ShowtimesComponent,
    OffersComponent,
    CinemasComponent,
    LoginOverlayComponent,
    CinemaHallComponent,
    HallsComponent,
    MovieCardComponent,
    ImageCarouselComponent,
    SeatComponent,
    SeatbookingComponent,
    RoomComponent,
    OverviewComponent,
    FooterComponent,
    CinemaMoviesComponent,
    DateTimeComponent,
    DateComponent,
    TimeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [UserchoiceService, DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
