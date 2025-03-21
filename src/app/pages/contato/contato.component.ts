import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  standalone: false,
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.scss',
})
export class ContatoComponent {
  email = 'fariajesiel@gmail.com';
  telefone = '(61) 9 8189-8269';
}
