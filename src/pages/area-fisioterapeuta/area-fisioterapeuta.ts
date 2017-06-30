import { AreaFisioterapeutaAulasPage } from './../area-fisioterapeuta-aulas/area-fisioterapeuta-aulas';
import { AreaFisioterapeutaExerciciosPage } from './../area-fisioterapeuta-exercicios/area-fisioterapeuta-exercicios';
import { AreaFisioterapeutaPacientePage } from './../area-fisioterapeuta-paciente/area-fisioterapeuta-paciente';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AreaFisioterapeuta page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-area-fisioterapeuta',
  templateUrl: 'area-fisioterapeuta.html',
})
export class AreaFisioterapeutaPage {

  tabRoot1: any;
  tabRoot2: any;
  tabRoot3: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabRoot1 = AreaFisioterapeutaPacientePage;
    this.tabRoot2 = AreaFisioterapeutaAulasPage;
    this.tabRoot3 = AreaFisioterapeutaExerciciosPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaFisioterapeuta');
  }

}
