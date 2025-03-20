import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './sobre.component';
import { SlideSwiperModule } from '../../components/slide-swiper/slide-swiper.module';

@NgModule({
  declarations: [SobreComponent],
  imports: [CommonModule, SlideSwiperModule],
  exports: [SobreComponent],
})
export class SobreModule {}
