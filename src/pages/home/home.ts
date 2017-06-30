import { CadastroPacientePage } from './../cadastro-paciente/cadastro-paciente';
import { CadastroFisioterapeutaPage } from './../cadastro-fisioterapeuta/cadastro-fisioterapeuta';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selEntry;
  constructor(public navCtrl: NavController) {

  }

  // onSelectionChange(entry) {
  //   this.selEntry = entry;
  // }

  selecionar(f){
    // this.onSelectionChange(r);
    if (f.checked){
      this.navCtrl.push(CadastroFisioterapeutaPage);
    }else{
      this.navCtrl.push(CadastroPacientePage);
    }
    // console.log("teste " + f.checked);
    
  }
}
