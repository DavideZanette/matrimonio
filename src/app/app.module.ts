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
import { BookingInformationComponent } from './booking-information/booking-information.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DbDataComponent } from './db-data/db-data.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { GiftsComponent } from './gifts/gifts.component';
import { OurstoryComponent } from './ourstory/ourstory.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingInformationComponent,
    HomePageComponent,
    DbDataComponent,
    ConfirmationComponent,
    GiftsComponent,
    OurstoryComponent
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



