import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-gallery',
  standalone: false,
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.scss',
})
export class CardGalleryComponent {
  DIMINUIR_INDEX = 1;

  @Input() day: string = '';
  @Input() month: string = '';
  @Input() year: string = '';
  @Input() author: string = 'Projeto';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() projetoNumber: number = 0;
  @Input() comments: number = 0;
  @Input() img: string = '';
  @Input() site: string = '';

  caminhoImagens = [
    {
      nome: 'SuperHeros',
      imagens: [
        'assets/superheros/superheros1.png',
        'assets/superheros/superheros2.png',
        'assets/superheros/superheros3.png',
        'assets/superheros/superheros4.png',
        'assets/superheros/superheros5.png',
        'assets/superheros/superheros6.png',
      ],
    },
    {
      nome: 'VejoFlix',
      imagens: [
        'assets/vejoflix/vejoflix.png',
        'assets/vejoflix/vejoflix1.png',
        'assets/vejoflix/vejoflix2.png',
        'assets/vejoflix/vejoflix3.png',
        'assets/vejoflix/vejoflix-cadastro.png',
        'assets/vejoflix/vejoflix-cadastro1.png',
        'assets/vejoflix/vejoflix-categoria1.png',
        'assets/vejoflix/vejoflix-categoria2.png',
        'assets/vejoflix/vejoflix-del.png',
        'assets/vejoflix/vejoflix-del1.png',
      ],
    },
    {
      nome: 'ActChallenger',
      imagens: [
        'assets/act_challenger/login.png',
        'assets/act_challenger/home.png',
        'assets/act_challenger/add_funcionario.png',
        'assets/act_challenger/add_func_erro.png',
        'assets/act_challenger/editar_funcionario.png',
        'assets/act_challenger/alterar_senha.png',
        'assets/act_challenger/alterar_senha_erro.png',
        'assets/act_challenger/modal_confirmacao.png',
      ],
    },
    {
      nome: 'projeto4',
      imagens: [],
    },
  ];

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
    console.log('---------site', this.site, this.author)
    this.router.navigate(['/detalhar-projeto'], {
      queryParams: {
        title: this.title,
        text: this.text,
        img: this.img,
        author: this.author,
        imagens: this.verificaProjeto(this.projetoNumber),
        site: this.site
      },
    });
  }

  verificaProjeto(projetoNumber: number) {
    return this.caminhoImagens[projetoNumber - this.DIMINUIR_INDEX].imagens;
  }
}
