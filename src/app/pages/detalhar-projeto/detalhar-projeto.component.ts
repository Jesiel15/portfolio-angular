import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-detalhar-projeto',
  standalone: false,
  templateUrl: './detalhar-projeto.component.html',
  styleUrls: ['./detalhar-projeto.component.scss'],
})
export class DetalharProjetoComponent implements OnInit, AfterViewInit {
  title: string = '';
  text: string = '';
  img: string = '';
  author: string = '';
  site: string = '';
  imagens: string[] = [];
  tecnologias: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.title = params['title'];
      this.text = params['text'];
      this.img = params['img'];
      this.author = params['author'];
      this.site = params['site'];
      this.imagens = params['imagens'];
      this.tecnologias = params['tecnologias'];
    });
  }

  ngAfterViewInit(): void {
    // Aguarda o Angular renderizar as imagens antes de iniciar o Swiper
    this.route.queryParams.subscribe(() => {
      setTimeout(() => {
        Swiper.use([Navigation, Pagination, Autoplay]);
        new Swiper('.swiper-container', {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 10,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        });
      }, 0);
    });
  }

  extrairNome(caminho: string): string {
    const partes = caminho.split('/');
    const nomeArquivo = partes[partes.length - 1]; // ex: react.png
    const nomeSemExtensao = nomeArquivo.split('.')[0]; // ex: react
    return nomeSemExtensao.charAt(0).toUpperCase() + nomeSemExtensao.slice(1); // React
  }

  onNavigate(event: MouseEvent, section: string): void {
    event.preventDefault();

    const currentUrl = this.router.url.split('#')[0];

    if (currentUrl === '/' || currentUrl === '/inicio') {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      this.scrollService.setTarget(section);
      this.router.navigateByUrl('/');
    }
  }
}
