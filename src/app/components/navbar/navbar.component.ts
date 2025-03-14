import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isScrolled: boolean = false; // Variável para controlar se a navbar deve aparecer
  lastScrollTop: number = 0; // Variável para armazenar a posição da rolagem anterior
  isFading: boolean = false; // Variável para controlar o efeito de fade

  @ViewChild('drawer') drawer!: MatSidenav; // Referência para o mat-sidenav (se for usado)

  constructor() {}

  ngOnInit(): void {}

  // Intercepta a rolagem para verificar a posição
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Verifica se o topo da seção "sobre" está visível
    const sobreElement = document.getElementById('sobre');
    if (sobreElement) {
      const sobrePosition = sobreElement.offsetTop;
      if (scrollY >= sobrePosition - window.innerHeight) {
        this.isScrolled = true; // Mostra a navbar quando a seção "Sobre" é atingida
      } else {
        this.isScrolled = false; // Esconde a navbar quando não estiver na seção "Sobre"
      }
    }
  }

  // Função de navegação para seções específicas
  onNavigate(event: MouseEvent, section: string): void {
    event.preventDefault(); // Impede o comportamento padrão de navegação

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Função de rolagem para o topo
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
