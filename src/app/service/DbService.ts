import { Subscription } from "../models/Subscription";
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
//import { collection, getDocs } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class DbService {

    //private readonly onDestroy = new Subject<void>();

  //  private result : Subscription[] = new Array();

    constructor(private db: AngularFirestore) { }


    writeSubscription(subscription: Subscription): boolean {

        this.db.collection("subscription").doc(subscription.name + subscription.surname).set({
            name: subscription.name,
            surname: subscription.surname,
            mailAddress: subscription.mailAddress,
            phoneNumber: subscription.phoneNumber,
            streetAddress: subscription.streetAddress,
            postalCode: subscription.postalCode,
            city: subscription.city,
            country: subscription.country
        })
            
        .then(function () {
                console.log("Document successfully written!");
            })
        .catch(function (error) {
                console.error("Error writing document: ", error);
        });

        return true;
    }

   
  /*  readDB() : Observable<QuerySnapshot<DocumentData>> {
         this.db.collection('subscription').get().pipe(takeUntil(this.onDestroy)).subscribe(snapshot => {
        
            

            const querySnapshot = await getDocs(collection(db, "cities"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});
        
    }*/

}