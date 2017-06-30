import { AreaFisioterapeutaPage } from './../area-fisioterapeuta/area-fisioterapeuta';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-fisioterapeuta',
  templateUrl: 'cadastro-fisioterapeuta.html',
})
export class CadastroFisioterapeutaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroFisioterapeuta');
  }


  salvarUsuario(): void{
    let msg = this.toastCtrl.create({
      message: 'Usuário salvo com sucesso!',
      duration: 4000
    });    

    msg.present();
    this.navCtrl.setRoot(AreaFisioterapeutaPage);
  }

}
