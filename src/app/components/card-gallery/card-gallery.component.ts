import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-gallery',
  standalone: false,
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.scss',
})
export class CardGalleryComponent {
  @Input() day: string = '13';
  @Input() month: string = 'Aug';
  @Input() year: string = '2016';
  @Input() author: string = 'Jane Doe';
  @Input() title: string = 'Stranger Things: The sound of the Upside Down';
  @Input() text: string =
    'The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.';
  @Input() likes: number = 18;
  @Input() comments: number = 3;
  @Input() img: string = 'test';

  // Método para obter o estilo do background
  getBackgroundStyle() {
    return {
      'background-image': `url(${this.img})`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
    };
  }
}
