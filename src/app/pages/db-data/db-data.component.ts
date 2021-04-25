import { Component, OnInit, Output } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubscriptionModel } from '../../models/SubscriptionModel';
import { DbService } from "../../service/DbService";

@Component({
  selector: 'app-db-data',
  templateUrl: './db-data.component.html'
})
export class DbDataComponent implements OnInit {

  dbData: SubscriptionModel[] = new Array();
  private sub: Subscription;

  constructor(public dbService: DbService, private readonly router: Router) { }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    // Deccomentare per risultati
    //this.readDB();
  }


  readDB(): void {
    this.sub = this.dbService.readSubscriptionFromDB().subscribe((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var element: SubscriptionModel = <SubscriptionModel>doc.data();
        this.dbData.push(element);
      });
    });;
  }

  goToHome(): void{
    this.router.navigate(['homePage']);
  }
}
