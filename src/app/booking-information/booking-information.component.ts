import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-information',
  templateUrl: './booking-information.component.html',
  styleUrls: ['../app.component.css']
})
export class BookingInformationComponent implements OnInit {

  constructor(public translate: TranslateService, private readonly router: Router) {
    translate.addLangs(['en', 'it', 'pt']);
    translate.setDefaultLang('en');
   }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {
  }

  goToHome(): void{
    this.router.navigate(['homePage']);
  }

  goToRsvp(): void{
    this.router.navigate(['homePage']);
  }

  goToConfirmation(): void{
    this.router.navigate(['homePage']);
  }

  goToGifts(): void{
    this.router.navigate(['homePage']);
  }

}
