import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCamposAlteracaoPage } from './modal-campos-alteracao';

@NgModule({
  declarations: [
    ModalCamposAlteracaoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCamposAlteracaoPage),
  ],
  exports: [
    ModalCamposAlteracaoPage
  ]
})
export class ModalCamposAlteracaoModule {}
