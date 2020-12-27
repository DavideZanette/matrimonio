import { Subscription } from "../models/Subscription";
import { AngularFirestore, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class DbService {

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


   /* readDB() {
        var items = this.db.collection('subscription').get().toPromise().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
            });
        });
    } */

}