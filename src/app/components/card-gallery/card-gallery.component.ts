import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-gallery',
  standalone: false,
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.scss',
})
export class CardGalleryComponent {
  @Input() day: string = '';
  @Input() month: string = '';
  @Input() year: string = '';
  @Input() author: string = 'Projeto';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() likes: number = 0;
  @Input() comments: number = 0;
  @Input() img: string = '';

  constructor(private router: Router) {}

  // Método para obter o estilo do background
  getBackgroundStyle() {
    return {
      'background-image': `url(${this.img})`,
      'background-size': 'cover',
      'background-position': 'center',
      'background-repeat': 'no-repeat',
    };
  }

  detalharProjeto() {
    this.router.navigate(['/detalhar-projeto']);
  }
}
