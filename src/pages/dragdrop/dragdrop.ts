import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";

@Component({
  selector: "page-dragdrop",
  templateUrl: "dragdrop.html"
})
export class DragDropPage {
  inputs: Array<{ title: string; type: string; value: string; class: string }>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController
  ) {
    this.inputs = [];
  }

  addElementClicked(elementClicked) {
    let alert = this.alertCtrl.create({
      title: "Give a nickname to the component",
      subTitle: "Exemple: My Wonderful button",
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
            console.log("Cancel clicked! Caution");
          }
        },
        {
          text: "Login",
          handler: data => {

            if (elementClicked == "button") {
              this.inputs.push({
                title: data.nickname,
                type: "button",
                value: data.nickname,
                class: "btn"
              });
            } else if (elementClicked == "checkbox") {
              this.inputs.push({
                title: data.nickname,
                type: "checkbox",
                value: data.nickname,
                class: "checkbox"
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
    alert.setTitle("Select a component for drag and drop");

    alert.addInput({
      type: "radio",
      label: "Button",
      value: "button",
      checked: true
    });

    alert.addInput({
      type: "radio",
      label: "Checkbox",
      value: "checkbox"
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
        this.addElementClicked(data);
      }
    });

    alert.present();
  }
}
