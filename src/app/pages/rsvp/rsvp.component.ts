import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html'
})
export class RsvpComponent implements OnInit {

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

}
