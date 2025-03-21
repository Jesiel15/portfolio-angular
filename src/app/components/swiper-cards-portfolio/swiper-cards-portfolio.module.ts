import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperCardsPortfolioComponent } from './swiper-cards-portfolio.component';
import { CardPortfolioModule } from '../card-portfolio/card-portfolio.module';

@NgModule({
  declarations: [SwiperCardsPortfolioComponent],
  imports: [CommonModule, CardPortfolioModule],
  exports: [SwiperCardsPortfolioComponent],
})
export class SwiperCardsPortfolioModule {}
