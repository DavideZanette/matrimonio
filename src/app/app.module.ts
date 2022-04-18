import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as jQuery from 'jquery';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BookingInformationComponent } from './components/booking-information/booking-information.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DbDataComponent } from './pages/db-data/db-data.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { GiftElementComponent } from './components/gift-element/gift-element.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { HeaderComponent } from './pages/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingInformationComponent,
    HomePageComponent,
    DbDataComponent,
    ConfirmationComponent,
    GiftsComponent,
    GiftElementComponent,
    RsvpComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}

// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



