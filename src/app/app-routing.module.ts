import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './pages/secoes/sobre/sobre.component';
import { PortfolioComponent } from './pages/secoes/portfolio/portfolio.component';
import { ContatoComponent } from './pages/secoes/contato/contato.component';
import { RedesSociaisComponent } from './pages/secoes/redes-sociais/redes-sociais.component';
import { InicioComponent } from './pages/secoes/inicio/inicio.component';
import { DetalharProjetoComponent } from './pages/detalhar-projeto/detalhar-projeto.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'redes-sociais', component: RedesSociaisComponent },
  { path: 'detalhar-projeto', component: DetalharProjetoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
