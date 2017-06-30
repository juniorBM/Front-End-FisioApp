import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ModalAlteracaoRemocaoAulasPage } from './../modal-alteracao-remocao-aulas/modal-alteracao-remocao-aulas';

/**
 * Generated class for the AreaFisioterapeutaAulas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-area-fisioterapeuta-aulas',
  templateUrl: 'area-fisioterapeuta-aulas.html',
})
export class AreaFisioterapeutaAulasPage {

  public conjunto: any;
  

  constructor(
    public modalCtrl: ModalController,
    public navCtrl: NavController, 
    public navParams: NavParams) 
    {
      this.conjunto = {
        "titulo": "",
        "icone": "",
        "operacao": "",
        "operAlteracaoRemocao": false,
        "placeHolderBusca": "",
        "tela": ""
      };
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreaFisioterapeutaAulas');
  }

  alterarAula(): void {

    this.conjunto.titulo = "Alteração de Aulas";
    this.conjunto.icone = "done-all";
    this.conjunto.operacao = "Alterar";
    this.conjunto.operAlteracaoRemocao = true;
    this.conjunto.placeHolderBusca = "Buscar aulas";
    this.conjunto.tela = "Aulas";

    
    this.modalShow(this.conjunto);

    console.log(this.conjunto);
    console.log(this.conjunto.titulo);
    console.log(this.conjunto.icone);
    console.log(this.conjunto.operacao);
    console.log(this.conjunto.operAlteracaoRemocao);
  }

  //Abre o modal para realização dos metodos
  modalShow(conjunto): void {
    let modalAlteracaoRemocao = this.modalCtrl.create(ModalAlteracaoRemocaoAulasPage, {conjunto: conjunto});
    modalAlteracaoRemocao.present();
  }


  removerAula(): void {
    this.conjunto.titulo = "Remoção de Aulas";
    this.conjunto.icone = "trash";
    this.conjunto.operacao = "Remover";
    this.conjunto.operAlteracaoRemocao = true;
    this.conjunto.placeHolderBusca = "Buscar aulas";
    this.modalShow(this.conjunto);
    
  }

  adicionarAula(): void {
    // this.conjunto = {
    //   "titulo": "Adicionar Novas Aulas",
    //   "icone": "",
    //   "operacao": "Adicionar",
    //   "operAlteracaoRemocao": false
    // }
    this.conjunto.titulo = "Adicionar Novas Aulas";
    this.conjunto.icone = "add-circle";
    this.conjunto.operacao = "Adicionar";
    this.conjunto.operAlteracaoRemocao = false;
    this.modalShow(this.conjunto);
  }

}
