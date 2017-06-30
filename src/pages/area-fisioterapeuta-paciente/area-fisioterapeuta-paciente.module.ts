import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AreaFisioterapeutaPacientePage } from './area-fisioterapeuta-paciente';

@NgModule({
  declarations: [
    AreaFisioterapeutaPacientePage,
  ],
  imports: [
    IonicPageModule.forChild(AreaFisioterapeutaPacientePage),
  ],
  exports: [
    AreaFisioterapeutaPacientePage
  ]
})
export class AreaFisioterapeutaPacienteModule {}
