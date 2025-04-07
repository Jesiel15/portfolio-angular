import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarModule } from './components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { SobreModule } from './pages/secoes/sobre/sobre.module';
import { PortfolioModule } from './pages/secoes/portfolio/portfolio.module';
import { ContatoModule } from './pages/secoes/contato/portfolio.module';
import { RedesSociaisModule } from './pages/secoes/redes-sociais/redes-sociais.module';
import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
import { InicioModule } from './pages/secoes/inicio/inicio.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserModule,

    // Components
    NavbarModule,
    CardGalleryModule,

    // Pages
    InicioModule,
    SobreModule,
    PortfolioModule,
    ContatoModule,
    RedesSociaisModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
