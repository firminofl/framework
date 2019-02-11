import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { NovoelementoPage } from '../novoelemento/novoelemento';


@Component({
  selector: "page-dragdrop",
  templateUrl: "dragdrop.html"
})
export class DragDropPage {
  inputs: Array<{ title: string; type: string; value: string; class:string }>;

  constructor(public navCtrl: NavController) {
    this.inputs = [
      { title: "teste", type: "text", value: "valor", class:"text" },
      { title: "teste2", type: "text", value: "valor2", class:"text" }
    ];
  }

  adicionarCampo() {
    this.inputs.push({ title: "teste3", type: "button", value: "valor", class:"button" });
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(NovoelementoPage);
  }
}
