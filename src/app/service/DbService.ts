
import { AngularFirestore, AngularFirestoreCollection, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SubscriptionModel } from '../models/SubscriptionModel';

@Injectable({
    providedIn: 'root'
})

export class DbService {

    constructor(private db: AngularFirestore) { }

    writeSubscription(subscription: SubscriptionModel): boolean {

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


    readSubscriptionFromDB(): Observable<QuerySnapshot<DocumentData>> {
        return this.db.collection("subscription").get();
    }

}