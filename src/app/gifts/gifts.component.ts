import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Gift } from '../models/Gift'

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['../app.component.css']
})
export class GiftsComponent implements OnInit {

  gifts: Gift[] = [{ imgPath: '../../assets/images/gifts/atHome.jpg', name: 'At Home', reaction: false },
  { imgPath: '../../assets/images/gifts/Cuba.jpg', name: 'Dancing Samba in Cuba', reaction: true }
    , { imgPath: '../../assets/images/gifts/Egypt.jpg', name: 'Discovering ancient treasures in Egypt', reaction: true },
    { imgPath: '../../assets/images/gifts/Forest.jpg', name: 'In the middle of the Amazon forest', reaction: false },
    { imgPath: '../../assets/images/gifts/Indonesia.jpg', name: 'Taking pictures in Indonesia', reaction: true }
    , { imgPath: '../../assets/images/gifts/Kenya.jpg', name: 'On a safari in Kenya', reaction: true },
    { imgPath: '../../assets/images/gifts/Castle.jpg', name: 'In an abandoned Castle', reaction: false },
    { imgPath: '../../assets/images/gifts/Maldives.jpg', name: 'Relaxing in the Maldives', reaction: true }
    , { imgPath: '../../assets/images/gifts/Siberia.jpg', name: 'Enjoying the Siberian weather', reaction: false }, 
    { imgPath: '../../assets/images/gifts/Singapore.jpg', name: 'Having a drink in Singapore', reaction: true },
    { imgPath: '../../assets/images/gifts/US.jpg', name: 'Looking for the American dream in the US', reaction: true },    
    { imgPath: '../../assets/images/gifts/NorthPole.jpg', name: 'Swimming at the North Pole', reaction: false }];

  elementClicked: boolean;
  reaction:boolean;


  constructor(public translate: TranslateService, private readonly router: Router) {
    translate.addLangs(['en', 'it', 'pt']);
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
  }

  goToHome(): void {
    this.router.navigate(['homePage']);
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  updateElement(elementClicked: boolean) {
    this.elementClicked = elementClicked;
  }

  updateReaction(reaction:boolean){
    this.reaction = reaction;
  }




}
