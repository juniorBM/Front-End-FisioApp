import { CadastroPessoaPage } from './../cadastro-pessoa/cadastro-pessoa';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro-paciente',
  templateUrl: 'cadastro-paciente.html',
})
export class CadastroPacientePage {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPaciente');
  }

  salvarUsuario(): void {
    this.navCtrl.setRoot(CadastroPessoaPage);
  }

  infoDados(): void {
      let alerta = this.alertCtrl.create({
        title: 'Informações Específicas',
        subTitle: 'Refere-se a informações particulares da pessoa, como remédios controlados, fraturas ósseas ou até mesmo doenças crônicas.',
        buttons: ['OK']
      });
      alerta.present();
      console.log('entrou no icone');
  }

}
