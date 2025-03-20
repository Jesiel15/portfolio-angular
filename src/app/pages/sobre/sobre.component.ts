import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-sobre',
  standalone: false,
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss',
})
export class SobreComponent implements AfterViewInit {
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
        1200: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
      },
    });
  }
}
