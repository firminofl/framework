import { TabsPage } from "./../tabs/tabs";
import { DragDropPage } from "./../dragdrop/dragdrop";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  App,
  AlertController
} from "ionic-angular";
import { ConfigurarelementoPage } from "../configurarelemento/configurarelemento";

@IonicPage()
@Component({
  selector: "page-elementos",
  templateUrl: "elementos.html"
})
export class ElementosPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public appCtrl: App,
    private alertCtrl: AlertController
  ) {}

  //Variable to send the DragDrop page
  informations;

  abrirConfiguracao(elemento) {
    console.log("Elemento escolhido: "+elemento)
    let alert = this.alertCtrl.create({
      title: "Setup element",
      subTitle:
        "Give a legal nickname for the component.\nExample: wonderful button",
      inputs: [
        {
          name: "nickname",
          placeholder: "nickname"
        }
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Done",
          handler: data => {
            //this.informations = {elemento: elemento, nickname: data.nickname };
            //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
            //this.navCtrl.push(DragDropPage, {element: elemento, nickname: data.nickname });
            //this.navCtrl.push(ConfigurarelementoPage, {elemento});
            //this.viewCtrl.dismiss();
            this.navCtrl.parent.select(1, {nickname: data.nickname });
          }
        }
      ]
    });
    alert.present();
  }

  popView() {
    this.navCtrl.pop();
  }
}
