import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatService } from './chat.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAugImLnsTkYWXvtN-n4P7ljATqDjtosd0",
  authDomain: "chatapp-812ef.firebaseapp.com",
  databaseURL: "https://chatapp-812ef.firebaseio.com",
  projectId: "chatapp-812ef",
  storageBucket: "chatapp-812ef.appspot.com",
  messagingSenderId: "62171655920",
  appId: "1:62171655920:web:60e9d37ff4b0a38c"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ChatService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
