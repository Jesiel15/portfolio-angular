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
      title: 'Super Heros',
      description:
        'Projeto criado para ideias de heróis com seus poderes e características.',
      image: 'assets/superheros/superheros1.png',
      category: 'Fullstack',
      tecnologia: 'Angular, Node Js e AWS EC2',
    },
    {
      title: 'Vejoflix',
      description: 'Projeto criado para salvar vídeos por categorias.',
      image: 'assets/vejoflix/vejoflix2.png',
      category: 'Fullstack',
      tecnologia: 'React js, Node Js e AWS EC2',
    },
    {
      title: 'Desafio 7 dias',
      description:
        'Desafio técnico realizado em uma semana para uma entrevista de emprego.',
      image: 'assets/act_challenger/home.png',
      category: 'Fullstack',
      tecnologia:
        'Angular, Node JS, PHP, Dockers, Postman, AWS EC2, e Testes unitários.',
    },
    {
      title: 'Projeto 4',
      description: 'Descrição do projeto 4.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
      tecnologia: '',
    },
    {
      title: 'Projeto 5',
      description: 'Descrição do projeto 5.',
      image: 'assets/exemplos/5.jpg',
      category: 'Web',
      tecnologia: '',
    },
    {
      title: 'Projeto 6',
      description: 'Descrição do projeto 6.',
      image: 'assets/exemplos/6.jpg',

      category: 'Back',
      tecnologia: '',
    },
    {
      title: 'Projeto 7',
      description: 'Descrição do projeto 7.',
      image: 'assets/exemplos/7.jpg',
      category: 'Back',
      tecnologia: '',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/7.jpg',
      category: 'Back',
      tecnologia: '',
    },
    {
      title: 'Projeto 9',
      description: 'Descrição do projeto 9.',
      image: 'assets/exemplos/9.jpg',

      category: 'Web',
      tecnologia: '',
    },
    {
      title: 'Projeto 8',
      description: 'Descrição do projeto 8.',
      image: 'assets/exemplos/7.jpg',
      category: 'Web',
      tecnologia: '',
    },
  ];

  filteredProjects = this.projects; // Inicialmente, exibe todos os projetos
  selectedCategory = 'Todos';

  constructor() {}

  ngOnInit(): void {}

  filterProjects(category: string): void {
    this.onNavigate('portfolio');
    if (category === 'Todos') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(
        (project) => project.category === category
      );
    }
    this.selectedCategory = category;
  }

  // Função de navegação para seções específicas
  onNavigate(section: string): void {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
