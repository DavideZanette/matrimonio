import { Component, OnInit, Output } from '@angular/core';
import { QuerySnapshot } from '@angular/fire/firestore';
import { Subscription } from '../models/Subscription';
import { DbService } from "../service/DbService";

@Component({
  selector: 'app-db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.css']
})
export class DbDataComponent implements OnInit {

  dbData : Subscription[];

  constructor(public dbService: DbService,) { }

  ngOnInit(): void {
    
   /* const result = this.dbService.readDB();

    result => {
      result.forEach(doc => {
        this.dbData.concat(doc);
      });

    console.log(this.dbData);
  }*/
}
}
