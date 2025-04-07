import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
  mostrarLanding = true;

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.atualizarEstado(this.router.url); // <- resolve F5

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.atualizarEstado(event.urlAfterRedirects);
      });
  }

  atualizarEstado(url: string) {
    this.mostrarLanding = url === '/' || url === '/inicio';
  }

  // ngAfterViewInit() {
  // const state = history.state;

  // if (state && state.scrollTo) {
  //   const targetSection = state.scrollTo;

  //   const tryScroll = () => {
  //     const element = document.getElementById(targetSection);
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  //     } else {
  //       setTimeout(tryScroll, 100); // Espera até a seção estar no DOM
  //     }
  //   };

  //   setTimeout(tryScroll, 200); // Pequeno atraso para garantir renderização
  // }
  // }

  ngAfterViewChecked() {
    const target = this.scrollService.getTarget();
    if (target) {
      this.scrollToSection(target);
    } else {
      this.scrollToFragment();
    }
  }

  private scrollToSection(section: string) {
    const tryScroll = () => {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        setTimeout(tryScroll, 100);
      }
    };
    setTimeout(tryScroll, 100);
  }
  private scrollToFragment(): void {
    const fragment = this.router.parseUrl(this.router.url).fragment;
    if (!fragment) return;

    const tryScroll = () => {
      const element = document.getElementById(fragment);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // Tenta novamente após um pequeno delay
        setTimeout(tryScroll, 100);
      }
    };

    // Espera um pouquinho pra garantir render
    setTimeout(tryScroll, 100);
  }
}
