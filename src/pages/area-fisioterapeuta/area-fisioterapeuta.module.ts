import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaFisioterapeutaPage } from './area-fisioterapeuta';

@NgModule({
  declarations: [
    AreaFisioterapeutaPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaFisioterapeutaPage),
  ],
  exports: [
    AreaFisioterapeutaPage
  ]
})
export class AreaFisioterapeutaModule {}
