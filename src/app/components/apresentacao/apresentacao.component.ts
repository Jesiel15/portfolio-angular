import { AfterViewInit, Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-apresentacao',
  standalone: false,
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss',
})
export class ApresentacaoComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const options = {
      strings: ['Jesiel', 'Dev'],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    };

    new Typed('.typed', options);
  }
}
