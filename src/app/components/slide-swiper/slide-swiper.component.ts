import { AfterViewInit, Component } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';

@Component({
  selector: 'app-slide-swiper',
  standalone: false,
  templateUrl: './slide-swiper.component.html',
  styleUrl: './slide-swiper.component.scss',
})
export class SlideSwiperComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    Swiper.use([Navigation, Pagination, Autoplay]);

    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      breakpoints: {
        // Desktop
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        // Tablet
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        // Celular
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 100,
        },
      },
    });
  }
}
