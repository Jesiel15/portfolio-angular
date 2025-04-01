import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ApresentacaoModule } from "../../components/apresentacao/apresentacao.module";
import { BackgroundModule } from "../../components/background/background.module";

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, ApresentacaoModule, BackgroundModule],
  exports: [InicioComponent],
})
export class InicioModule {}
