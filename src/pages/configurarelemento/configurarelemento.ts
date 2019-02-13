import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { DragDropPage } from '../dragdrop/dragdrop'

@IonicPage()
@Component({
  selector: 'page-configurarelemento',
  templateUrl: 'configurarelemento.html',
})
export class ConfigurarelementoPage {
  //Referencia com o elemento em HTML
  id: string;
  value: string;
  elementoClicado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.elementoClicado = this.navParams.get('elemento');
    console.log("Configuracao elemento: "+this.elementoClicado )

  }

  salvarConfig(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(DragDropPage, {id: this.id, value: this.value, elementoClicado: this.elementoClicado});
  }

  popView(){
    this.navCtrl.pop();
  }
}


