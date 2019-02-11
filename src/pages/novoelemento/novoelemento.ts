import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-novoelemento',
  templateUrl: 'novoelemento.html',
})
export class NovoelementoPage {
  //Referencia com o elemento em HTML
  id: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController) {
  }

  salvarConfig(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(TabsPage, {}, {animate: true});
    this.navCtrl.parent.select(1);
    console.log("id: "+this.id);
  }

  popView(){
    this.navCtrl.pop();
  }
}


