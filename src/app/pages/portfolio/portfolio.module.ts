import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { CardPortfolioModule } from '../../components/card-portfolio/card-portfolio.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, CardPortfolioModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
