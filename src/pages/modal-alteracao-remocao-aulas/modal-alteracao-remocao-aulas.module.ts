import { IonicPageModule } from 'ionic-angular';
import { ModalAlteracaoRemocaoAulasPage } from './modal-alteracao-remocao-aulas';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    ModalAlteracaoRemocaoAulasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalAlteracaoRemocaoAulasPage),
  ],
  exports: [
    ModalAlteracaoRemocaoAulasPage
  ]
})
export class AlteracaoRemocaoAulasModule {}
