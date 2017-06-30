import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFisioterapeutaPage } from './cadastro-fisioterapeuta';

@NgModule({
  declarations: [
    CadastroFisioterapeutaPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFisioterapeutaPage),
  ],
  exports: [
    CadastroFisioterapeutaPage
  ]
})
export class CadastroFisioterapeutaModule {}
