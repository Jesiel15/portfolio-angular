import { AfterViewInit, Component } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-swiper-cards-portfolio',
  standalone: false,
  templateUrl: './swiper-cards-portfolio.component.html',
  styleUrls: ['./swiper-cards-portfolio.component.scss'],
})
export class SwiperCardsPortfolioComponent implements AfterViewInit {
  projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      image: 'assets/exemplos/1.jpg',
      details: 'Aqui estão os detalhes do Projeto 1.',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      details: 'Aqui estão os detalhes do Projeto 2.',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',

      details: 'Aqui estão os detalhes do Projeto 3.',
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4.',
      image: 'assets/exemplos/4.jpg',
      details: 'Aqui estão os detalhes do Projeto 4.',
    },
    {
      title: 'Projeto 5',
      description: 'Descrição do projeto 5.',
      image: 'assets/exemplos/5.jpg',
      details: 'Aqui estão os detalhes do Projeto 5.',
    },
    {
      title: 'Projeto 6',
      description: 'Descrição do projeto 6.',
      image: 'assets/exemplos/6.jpg',

      details: 'Aqui estão os detalhes do Projeto 6.',
    },
    {
      title: 'Projeto 7',
      description: 'Descrição do projeto 7.',
      image: 'assets/exemplos/7.jpg',
      details: 'Aqui estão os detalhes do Projeto 7.',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      details: 'Aqui estão os detalhes do Projeto 8.',
    },
    {
      title: 'Projeto 9',
      description: 'Descrição do projeto 9.',
      image: 'assets/exemplos/9.jpg',

      details: 'Aqui estão os detalhes do Projeto 9.',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      details: 'Aqui estão os detalhes do Projeto 8.',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      details: 'Aqui estão os detalhes do Projeto 2.',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',

      details: 'Aqui estão os detalhes do Projeto 3.',
    },
  ];

  
  selectedProject: any = null;
  swiperInstance: any;

  ngAfterViewInit(): void {
    Swiper.use([Navigation, Pagination, Autoplay]);

    this.swiperInstance = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
      autoplay: { delay: 3000, disableOnInteraction: false },
      navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      },
      simulateTouch: true,
      touchMoveStopPropagation: false,
      allowTouchMove: true,  // Permite o toque
    });
  }

  // Método para exibir os detalhes do projeto
  onShowDetails(project: any) {
    this.selectedProject = project;
    // Desabilita a interação com o Swiper
    this.swiperInstance.params.allowTouchMove = false;  // Desabilita o toque
    this.swiperInstance.params.autoplay.disableOnInteraction = true;  // Desabilita autoplay
    this.swiperInstance.update();  // Atualiza as configurações
  }

  // Método para esconder o modal
  hideDetails() {
    this.selectedProject = null;
    // Reabilita a interação com o Swiper
    this.swiperInstance.params.allowTouchMove = true;  // Habilita o toque
    this.swiperInstance.params.autoplay.disableOnInteraction = false;  // Habilita autoplay novamente
    this.swiperInstance.update();  // Atualiza as configurações
  }
}
