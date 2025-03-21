import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { CardPortfolioModule } from '../../components/card-portfolio/card-portfolio.module';
import { SwiperCardsPortfolioModule } from '../../components/swiper-cards-portfolio/swiper-cards-portfolio.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, SwiperCardsPortfolioModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
