import { Component } from '@angular/core';

@Component({
  selector: 'app-card-portfolio',
  standalone: false,
  templateUrl: './card-portfolio.component.html',
  styleUrl: './card-portfolio.component.scss',
})
export class CardPortfolioComponent {
  projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      image: 'assets/exemplos/1.jpg',
      details: 'Aqui estão os detalhes do Projeto 1.',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      details: 'Aqui estão os detalhes do Projeto 2.',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',

      details: 'Aqui estão os detalhes do Projeto 3.',
    },
  ];

  selectedProject: any = null;

  showDetails(project: any) {
    this.selectedProject = project;
  }

  hideDetails() {
    this.selectedProject = null;
  }
}
