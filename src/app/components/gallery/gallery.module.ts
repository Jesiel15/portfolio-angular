import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { CardGalleryModule } from '../card-gallery/card-gallery.module';

@NgModule({
  declarations: [GalleryComponent],
  imports: [CommonModule, CardGalleryModule],
  exports: [GalleryComponent],
})
export class GalleryModule {}
