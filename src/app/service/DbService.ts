import { Subscription } from "../models/Subscription";
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { Injectable, Output } from '@angular/core';
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

   
   // readDB() : Observable<QuerySnapshot<DocumentData>> {
         /*this.db.collection('subscription').get().pipe(takeUntil(this.onDestroy)).subscribe(snapshot => {
            snapshot.forEach(doc => {
                this.result.concat(<Subscription> doc.data());
                //console.log(<Subscription>doc.data());
            });
        }); */

    //    const subscriptionRef = this.db.collection('subscription');
    //   return subscriptionRef.get();

      /*  snapshot.forEach(doc => {
            this.result.concat(<Subscription> doc);
            //console.log(<Subscription>doc.data());
        });
        */
    //}

}