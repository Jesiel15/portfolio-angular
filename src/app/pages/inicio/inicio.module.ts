import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { ApresentacaoModule } from "../../components/apresentacao/apresentacao.module";

@NgModule({
  declarations: [InicioComponent],
  imports: [CommonModule, ApresentacaoModule],
  exports: [InicioComponent],
})
export class InicioModule {}
