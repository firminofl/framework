import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ConfigurarelementoPage } from "../configurarelemento/configurarelemento";

@IonicPage()
@Component({
  selector: "page-elementos",
  templateUrl: "elementos.html"
})
export class ElementosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirConfiguracao(elemento) {
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(ConfigurarelementoPage, {elemento});
  }

  popView() {
    this.navCtrl.pop();
  }
}
