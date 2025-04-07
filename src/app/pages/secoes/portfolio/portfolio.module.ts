import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { GalleryModule } from '../../../components/gallery/gallery.module';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, GalleryModule],
  exports: [PortfolioComponent],
})
export class PortfolioModule {}
