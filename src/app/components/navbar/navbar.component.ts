import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled: boolean = false; // Variável para controlar se a navbar deve aparecer
  lastScrollTop: number = 0; // Variável para armazenar a posição da rolagem anterior

  @ViewChild('drawer') drawer!: MatSidenav; // Referência para o mat-sidenav (se for usado)

  constructor() {}

  ngOnInit(): void {}

  // Evento de rolagem da janela
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Se o usuário rolar para baixo, a navbar deve aparecer
    if (scrollTop > 0 && scrollTop > this.lastScrollTop) {
      this.isScrolled = true; // A navbar aparece
    } else {
      this.isScrolled = false; // A navbar some
    }

    // Atualiza a posição da rolagem
    this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Não permite valores negativos
  }
}
