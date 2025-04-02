import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarModule } from './components/navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { InicioModule } from './pages/inicio/inicio.module';
import { SobreModule } from './pages/sobre/sobre.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ContatoModule } from './pages/contato/portfolio.module';
import { RedesSociaisModule } from './pages/redes-sociais/redes-sociais.module';
import { CardGalleryModule } from './components/card-gallery/card-gallery.module';
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
