import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { enviroment } from '../enviroments/enviroment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
