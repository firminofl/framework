import { ElementosPage } from "./../elementos/elementos";
import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";

@Component({
  selector: "page-dragdrop",
  templateUrl: "dragdrop.html"
})
export class DragDropPage {
  inputs: Array<{ title: string; type: string; value: string; class: string }>;
  elementoClicado: string;
  testRadioOpen = false;
  testRadioResult: any;
  nickname;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.inputs = [];
  }

  nicknameComponent() {
    let alert = this.alertCtrl.create({
      title: "Give a nickname to the component",
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
          text: "Login",
          handler: data => {
            return data.nickname;
          }
        }
      ]
    });
    alert.present();
  }

  adicionarelementoClicado(elementoClicado) {
    let alert = this.alertCtrl.create({
      title: "Give a nickname to the component",
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
          text: "Login",
          handler: data => {
            if (elementoClicado == "button") {
              this.inputs.push({
                title: data.nickname,
                type: "button",
                value: data.nickname,
                class: "btn"
              });
            }
          }
        }
      ]
    });
    alert.present();
  }

  alertDialogChoice() {
    let alert = this.alertCtrl.create();
    alert.setTitle("Select a component");

    alert.addInput({
      type: "radio",
      label: "Button",
      value: "button",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "ListView",
      value: "listview"
    });

    alert.addInput({
      type: "radio",
      label: "Graph",
      value: "graph"
    });

    alert.addButton("Cancel");
    alert.addButton({
      text: "Ok",
      handler: (data: any) => {
        console.log("Radio data:", data);
        this.adicionarelementoClicado(data);
      }
    });

    alert.present();
  }
}
