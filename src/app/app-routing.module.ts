import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingInformationComponent } from './booking-information/booking-information.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'bookingInformation',
    component: BookingInformationComponent
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
