import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingInformationComponent } from './booking-information/booking-information.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OurstoryComponent } from './ourstory/ourstory.component';

const routes: Routes = [
  {
    path: 'ourstory',
    component: OurstoryComponent
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
    path: '',   redirectTo: '/homePage', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
