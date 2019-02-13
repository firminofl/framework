import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-dragdrop",
  templateUrl: "dragdrop.html"
})
export class DragDropPage {
  inputs: Array<{ title: string; type: string; value: string; class: string }>;
  elementoClicado: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.inputs = [];
    this.elementoClicado = this.navParams.get("elementoClicado");

    console.log("Drag Drop: "+this.elementoClicado);
    this.adicionarelementoClicado(this.elementoClicado);
  }

  adicionarelementoClicado(elementoClicado) {

    console.log("elementoClicado: "+elementoClicado)
    if (elementoClicado == "botao") {
      this.inputs.push({
        title: "teste3",
        type: "button",
        value: "valor",
        class: "button"
      });
    }
  }
}
