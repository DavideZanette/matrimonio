import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from "../models/Subscription";
import { DbService } from "../service/DbService";
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['../app.component.css']
})

export class HomePageComponent {

  @Input() subscription: Subscription = new Subscription;

  subscriptionSuccessful: boolean = false;
  dbData: Subscription[];

  constructor(public dbService: DbService, public translate: TranslateService, private readonly router: Router) {
    translate.addLangs(['en', 'it', 'pt']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
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

}
