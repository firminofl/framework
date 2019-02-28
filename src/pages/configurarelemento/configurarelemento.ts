import { ElementosPage } from './../elementos/elementos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, App } from "ionic-angular";
import { DragDropPage } from '../dragdrop/dragdrop'

@IonicPage()
@Component({
  selector: 'page-configurarelemento',
  templateUrl: 'configurarelemento.html',
})
export class ConfigurarelementoPage {
  //Referencia com o elemento em HTML
  nickname: string;
  elementoClicado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public appCtrl: App) {
    this.elementoClicado = this.navParams.get('elemento');
  }

  salvarConfig(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(DragDropPage, {nickname: this.nickname, elementoClicado: this.elementoClicado});
    this.viewCtrl.dismiss();
  }

  popView(){
    this.navCtrl.pop();
  }
}


