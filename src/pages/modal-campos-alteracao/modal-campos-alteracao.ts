import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-modal-campos-alteracao',
  templateUrl: 'modal-campos-alteracao.html',
})
export class ModalCamposAlteracaoPage {

  public conjunto: any;
  public myDate: string; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController) 
    {
      this.conjunto = this.navParams.get('conjunto');
      this.myDate = new Date().toISOString();     
    }

  ionViewDidLoad() {
    
    // if (this.conjunto.operacao  == "Alterar"){

    // }
    // this.conjunto.titulo = "Alteração de aula";
    // this.conjunto.tela = ""
    
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  alterar(): void {
    this.viewCtrl.dismiss();
    let msg = this.toastCtrl.create({
      message: 'Aula alterada com sucesso!',
      duration: 4000
    });
    msg.present();
  }

  

}
