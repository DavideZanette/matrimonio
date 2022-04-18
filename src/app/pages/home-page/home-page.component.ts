import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SubscriptionModel } from "../../models/SubscriptionModel";
import { DbService } from "../../service/DbService";
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html'
})

export class HomePageComponent {

  @Input() subscription: SubscriptionModel = new SubscriptionModel;

  subscriptionSuccessful: boolean = false;


  constructor(public dbService: DbService, public translate: TranslateService, private readonly router: Router) {
    translate.addLangs(['it', 'pt']);
    translate.setDefaultLang('pt');
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  submitSubscription(form: NgForm) {
    this.subscriptionSuccessful = this.dbService.writeSubscription(this.subscription);
  }

  goToRsvp(): void {
    this.router.navigate(['rsvp']);
  }

  goToBookingInformation(): void {
    this.router.navigate(['bookingInformation']);
  }

  goToConfirmation(): void {
    this.router.navigate(['confirmation']);
  }

  goToGifts(): void {
    this.router.navigate(['gifts']);
  }

  goToDBData(): void {
    this.router.navigate(['DBData']);
  }

  
}
