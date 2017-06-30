import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaFisioterapeutaAulasPage } from './area-fisioterapeuta-aulas';

@NgModule({
  declarations: [
    AreaFisioterapeutaAulasPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaFisioterapeutaAulasPage),
  ],
  exports: [
    AreaFisioterapeutaAulasPage
  ]
})
export class AreaFisioterapeutaAulasModule {}
