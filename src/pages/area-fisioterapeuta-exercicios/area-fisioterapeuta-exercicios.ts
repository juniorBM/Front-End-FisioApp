import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaFisioterapeutaExercicios page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-area-fisioterapeuta-exercicios',
  templateUrl: 'area-fisioterapeuta-exercicios.html',
})
export class AreaFisioterapeutaExerciciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaFisioterapeutaExercicios');
  }

}
