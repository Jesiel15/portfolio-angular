import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio-angular';
  // constructor(private router: Router, private route: ActivatedRoute) {
  //   this.router.events
  //     .pipe(filter((event) => event instanceof NavigationEnd))
  //     .subscribe(() => {
  //       this.scrollToFragment();
  //     });
  // }
  ngAfterViewChecked() {
    this.scrollToFragment();
  }

  private scrollToFragment() {
    const fragment = window.location.hash.replace('#', ''); // Obtemos o fragmento diretamente da URL
    if (fragment) {
      const element = document.getElementById(fragment);
      if (element) {
        // Adicionamos um pequeno atraso para permitir que o navegador processe o link antes da rolagem
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // O atraso pode ser ajustado (100ms é um bom valor inicial)
      }
    }
  }
}
