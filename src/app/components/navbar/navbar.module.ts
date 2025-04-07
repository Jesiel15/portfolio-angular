import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { NavbarComponent } from './navbar.component';
import { SobreModule } from '../../pages/secoes/sobre/sobre.module';
import { InicioModule } from '../../pages/secoes/inicio/inicio.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    InicioModule,
    SobreModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
