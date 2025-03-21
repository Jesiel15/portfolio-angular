import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  projects = [
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      image: 'assets/exemplos/1.jpg',
      category: 'Front',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',

      category: 'Front',
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 5',
      description: 'Descrição do projeto 5.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 6',
      description: 'Descrição do projeto 6.',
      image: 'assets/exemplos/6.jpg',

      category: 'Back',
    },
    {
      title: 'Projeto 7',
      description: 'Descrição do projeto 7.',
      image: 'assets/exemplos/7.jpg',
      category: 'Back',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      category: 'Back',
    },
    {
      title: 'Projeto 9',
      description: 'Descrição do projeto 9.',
      image: 'assets/exemplos/9.jpg',

      category: 'Web',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 1',
      description: 'Descrição do projeto 1.',
      image: 'assets/exemplos/1.jpg',
      category: 'Front',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      category: 'Front',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',

      category: 'Front',
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 5',
      description: 'Descrição do projeto 5.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 6',
      description: 'Descrição do projeto 6.',
      image: 'assets/exemplos/6.jpg',

      category: 'Back',
    },
    {
      title: 'Projeto 7',
      description: 'Descrição do projeto 7.',
      image: 'assets/exemplos/7.jpg',
      category: 'Back',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      category: 'Back',
    },
    {
      title: 'Projeto 9',
      description: 'Descrição do projeto 9.',
      image: 'assets/exemplos/9.jpg',

      category: 'Web',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/8.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 2',
      description: 'Descrição do projeto 2.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
    },
    {
      title: 'Projeto 3',
      description: 'Descrição do projeto 3.',
      image: 'assets/exemplos/3.jpg',
      category: 'Web',
    },
  ];

  filteredProjects = this.projects; // Inicialmente, exibe todos os projetos
  selectedCategory = 'Todos';

  constructor() {}

  ngOnInit(): void {}

  filterProjects(category: string): void {
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
    this.selectedCategory = category;
  }
}
