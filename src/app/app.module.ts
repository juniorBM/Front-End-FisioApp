import { AreaFisioterapeutaPage } from './../pages/area-fisioterapeuta/area-fisioterapeuta';
import { AreaFisioterapeutaPacientePage } from './../pages/area-fisioterapeuta-paciente/area-fisioterapeuta-paciente';
import { AreaFisioterapeutaExerciciosPage } from './../pages/area-fisioterapeuta-exercicios/area-fisioterapeuta-exercicios';
import { AreaFisioterapeutaAulasPage } from './../pages/area-fisioterapeuta-aulas/area-fisioterapeuta-aulas';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroPacientePage } from './../pages/cadastro-paciente/cadastro-paciente';
import { CadastroFisioterapeutaPage } from './../pages/cadastro-fisioterapeuta/cadastro-fisioterapeuta';
import { CadastroPessoaPage } from './../pages/cadastro-pessoa/cadastro-pessoa';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ModalAlteracaoRemocaoAulasPage } from './../pages/modal-alteracao-remocao-aulas/modal-alteracao-remocao-aulas';
import { ModalCamposAlteracaoPage } from './../pages/modal-campos-alteracao/modal-campos-alteracao';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    AreaFisioterapeutaAulasPage,
    AreaFisioterapeutaExerciciosPage,
    AreaFisioterapeutaPacientePage,
    AreaFisioterapeutaPage,
    CadastroFisioterapeutaPage,
    CadastroPacientePage,
    CadastroPessoaPage,
    HomePage,
    ModalAlteracaoRemocaoAulasPage,
    ModalCamposAlteracaoPage,
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AreaFisioterapeutaAulasPage,
    AreaFisioterapeutaExerciciosPage,
    AreaFisioterapeutaPacientePage,
    AreaFisioterapeutaPage,
    CadastroFisioterapeutaPage,
    CadastroPacientePage,
    CadastroPessoaPage,
    ModalAlteracaoRemocaoAulasPage,
    ModalCamposAlteracaoPage,
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
