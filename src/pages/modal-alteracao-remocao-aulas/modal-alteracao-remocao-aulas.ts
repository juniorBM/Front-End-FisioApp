import { AlertController, IonicPage, ModalController,NavController, NavParams, ToastController,ViewController } from 'ionic-angular';
import { Component } from '@angular/core';
import { ModalCamposAlteracaoPage } from './../modal-campos-alteracao/modal-campos-alteracao';

@IonicPage()
@Component({
  selector: 'modal-page-alteracao-remocao-aulas',
  templateUrl: 'modal-alteracao-remocao-aulas.html',
})
export class ModalAlteracaoRemocaoAulasPage {

  public conjunto: any;
  public pa: string;
  constructor(
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController) 
    {
      this.conjunto = this.navParams.get('conjunto')
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlteracaoRemocaoAulas');
    console.log("Conjuntos do modal" + this.conjunto.operacao);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  // alertAlteracao(): void {
  //   let prompt = this.alertCtrl.create({
  //     title: "Alteração",
  //     message: "Altere os campos necessário e clique em salvar",
  //     inputs: [
  //       {
  //         name: 'dthrInicio',
  //         placeholder: 'Hora e Dia de Início',
  //         type: 'date',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'OK',
  //         handler: data => {
  //           console.log('Saved clicked');
  //         }
  //       }
  //     ]
  //   });

  //   prompt.present();
  // }

  modalAlteracao(): void {
    let modalAltercao = this.modalCtrl.create(ModalCamposAlteracaoPage, {conjunto: this.conjunto});
    modalAltercao.present();
  }

  operacao(): void {
    if (this.conjunto.operacao == "Alterar"){
      this.pa = "Alterar";
      this.modalAlteracao();
    }else{
      this.pa = "Remover";
    }

    console.log(this.conjunto.operacao);
  }

  salvar(): void {
    this.viewCtrl.dismiss();
    let msg = this.toastCtrl.create({
      message: 'Aula salva com sucesso!',
      duration: 4000
    });
    msg.present();
  }
  
}
