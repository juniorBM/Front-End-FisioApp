import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaFisioterapeutaPaciente page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-area-fisioterapeuta-paciente',
  templateUrl: 'area-fisioterapeuta-paciente.html',
})
export class AreaFisioterapeutaPacientePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaFisioterapeutaPaciente');
  }

}
