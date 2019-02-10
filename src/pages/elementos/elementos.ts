import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-elementos',
  templateUrl: 'elementos.html',
})
export class ElementosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  abrirTela(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a HomePage
    this.navCtrl.push(HomePage);
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Sucesso ao trocar de tela!',
      duration: 3000,
      cssClass: "toast-message"
    });
    toast.present();
  }
}
