import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isScrolled: boolean = false;
  lastScrollTop: number = 0;
  isFading: boolean = false;
  isLandingPage: boolean = true;

  @ViewChild('drawer') drawer!: MatSidenav;

  constructor(private router: Router, private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage =
          event.urlAfterRedirects === '/inicio' || event.url === '/';
        if (!this.isLandingPage) {
          this.isScrolled = true; // Sempre mostra navbar fora da landing
        }
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    if (!this.isLandingPage) return; // Só aplica o scroll se for na landing

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const sobreElement = document.getElementById('sobre');

    if (sobreElement) {
      const sobrePosition = sobreElement.offsetTop;
      this.isScrolled = scrollY >= sobrePosition - window.innerHeight;
    }
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

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
