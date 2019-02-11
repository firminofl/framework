import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { DragDropPage } from '../pages/dragdrop/dragdrop';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ElementosPage } from '../pages/elementos/elementos';
import { NovoelementoPageModule } from '../pages/novoelemento/novoelemento.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AbsoluteDrag } from '../components/absolute-drag/absolute-drag';

@NgModule({
  declarations: [
    MyApp,
    DragDropPage,
    ContactPage,
    HomePage,
    TabsPage,
    AbsoluteDrag,
    ElementosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NovoelementoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DragDropPage,
    ContactPage,
    HomePage,
    TabsPage,
    ElementosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
