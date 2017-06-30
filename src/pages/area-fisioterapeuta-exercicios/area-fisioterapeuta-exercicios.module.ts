import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaFisioterapeutaExerciciosPage } from './area-fisioterapeuta-exercicios';

@NgModule({
  declarations: [
    AreaFisioterapeutaExerciciosPage,
  ],
  imports: [
    IonicPageModule.forChild(AreaFisioterapeutaExerciciosPage),
  ],
  exports: [
    AreaFisioterapeutaExerciciosPage
  ]
})
export class AreaFisioterapeutaExerciciosModule {}
