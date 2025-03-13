import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled: boolean = false; // Variável para controlar o estado de rolagem

  constructor() {}

  ngOnInit(): void {}

  // Evento de rolagem da janela
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Se a rolagem for maior que 50px, o navbar começa a sumir
  }
}
