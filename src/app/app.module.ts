import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarModule } from './components/navbar/navbar.module';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SobreComponent,
    PortfolioComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserModule,
    NavbarModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
