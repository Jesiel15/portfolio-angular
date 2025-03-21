import { Component } from '@angular/core';

@Component({
  selector: 'app-redes-sociais',
  standalone: false,
  templateUrl: './redes-sociais.component.html',
  styleUrl: './redes-sociais.component.scss',
})
export class RedesSociaisComponent {
  // Função de navegação para seções específicas
  onNavigate(event: MouseEvent, section: string): void {
    event.preventDefault(); // Impede o comportamento padrão de navegação

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
