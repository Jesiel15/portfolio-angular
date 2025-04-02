import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGalleryComponent } from './card-gallery.component';

@NgModule({
  declarations: [CardGalleryComponent],
  imports: [CommonModule],
  exports: [CardGalleryComponent],
})
export class CardGalleryModule {}
