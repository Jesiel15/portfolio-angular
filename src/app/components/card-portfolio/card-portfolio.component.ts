import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-portfolio',
  standalone: false,
  templateUrl: './card-portfolio.component.html',
  styleUrl: './card-portfolio.component.scss',
})
export class CardPortfolioComponent {
  @Input() project: any;
  @Output() showDetails = new EventEmitter<any>(); // Emitir evento para o componente pai

  onClick() {
    this.showDetails.emit(this.project); // Emite o projeto selecionado para o componente pai
  }
}
