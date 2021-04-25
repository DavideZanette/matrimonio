import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingInformationComponent } from './components/booking-information/booking-information.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { DbDataComponent } from './pages/db-data/db-data.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';

const routes: Routes = [
  {
    path: 'rsvp',
    component: RsvpComponent
  },
  {
    path: 'bookingInformation',
    component: BookingInformationComponent
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent
  },
  {
    path: 'gifts',
    component: GiftsComponent
  },
  {
    path: 'homePage',
    component: HomePageComponent
  },
  {
    path: 'DBData',
    component: DbDataComponent
  },
  {
    path: '',   redirectTo: '/homePage', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
