import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { ViewUserComponent } from './components/view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgoComponent } from './ngo/ngo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DonaterComponent } from './donater/donater.component';
import { RestregisComponent } from './restregis/restregis.component';
import { RestloginComponent } from './restlogin/restlogin.component';
import { RestdashRestanaComponent } from './restdash-restana/restdash-restana.component';
import { RestdashComponent } from './restdash/restdash.component';
import { RestanaComponent } from './restana/restana.component';
import { RestprofComponent } from './restprof/restprof.component';
import { RestsettComponent } from './restsett/restsett.component';
import { RestmenuComponent } from './restmenu/restmenu.component';
import { RestaddmenuComponent } from './restaddmenu/restaddmenu.component';
import { RestordeComponent } from './restorde/restorde.component';
import { RestdataComponent } from './restdata/restdata.component';
import { NgodashComponent } from './ngodash/ngodash.component';
import { NgoanaComponent } from './ngoana/ngoana.component';
import { NgoproComponent } from './ngopro/ngopro.component';
import { NgosetComponent } from './ngoset/ngoset.component';
import { NgodonaComponent } from './ngodona/ngodona.component';
import { NgodataComponent } from './ngodata/ngodata.component';
import { NgologinComponent } from './ngologin/ngologin.component';
import { NgoregistComponent } from './ngoregist/ngoregist.component';
import { DonatorComponent } from './donator/donator.component';
import { DonatorprofComponent } from './donatorprof/donatorprof.component';
import { DonatororderComponent } from './donatororder/donatororder.component';
import { DonatorregiComponent } from './donatorregi/donatorregi.component';
import { DonatloginComponent } from './donatlogin/donatlogin.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { RestproeditComponent } from './restproedit/restproedit.component';
import { NgoproeditComponent } from './ngoproedit/ngoproedit.component';
import { RestdonationComponent } from './restdonation/restdonation.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MapComponent } from './map/map.component';
//import { GoogleMapsModule } from '@angular/google-maps'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const environment = {

  firebase :{
  apiKey: "AIzaSyD5EeWZk1WPg1pYuhZptTPiQ60SuzyohPg",
  authDomain: "food-unity-hub.firebaseapp.com",
  databaseURL: "https://food-unity-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-unity-hub",
  storageBucket: "food-unity-hub.appspot.com",
  messagingSenderId: "644891973175",
  appId: "1:644891973175:web:0f7a2be04f9ea9a1ef11b2",
  measurementId: "G-FP709R6KNM"
  },
  production: true
}

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    UpdateUserComponent,
    ViewUserComponent,
    HomeComponent,
    NgoComponent,
    AboutComponent,
    ContactComponent,
    RestaurantComponent,
    DonaterComponent,
    RestregisComponent,
    RestloginComponent,
    RestdashRestanaComponent,
    RestdashComponent,
    RestanaComponent,
    RestprofComponent,
    RestsettComponent,
    RestmenuComponent,
    RestaddmenuComponent,
    RestordeComponent,
    RestdataComponent,
    NgodashComponent,
    NgoanaComponent,
    NgoproComponent,
    NgosetComponent,
    NgodonaComponent,
    NgodataComponent,
    NgologinComponent,
    NgoregistComponent,
    DonatorComponent,
    DonatorprofComponent,
    DonatororderComponent,
    DonatorregiComponent,
    DonatloginComponent,
    AddMenuComponent,
    RestproeditComponent,
    NgoproeditComponent,
    RestdonationComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
