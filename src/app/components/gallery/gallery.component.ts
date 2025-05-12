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
        'Este projeto foi desenvolvido para gerenciar e armazenar informações de heróis fictícios. A aplicação permite cadastrar novos personagens com dados personalizados como nome, descrição, poder, sexo, origem e imagem. Cada herói possui uma identidade única e pode ser visualizado com seus respectivos detalhes. O sistema foi pensado com foco em uma interface intuitiva, onde o usuário pode adicionar, editar e visualizar heróis de maneira rápida e eficiente. Além disso, o projeto conta com suporte ao upload e exibição de imagens, garantindo uma apresentação visual imersiva dos personagens.',
      image: 'assets/superheros/superheros1.png',
      category: 'Fullstack',
      tecnologia: 'Angular, Node Js e AWS EC2',
      site: 'https://super-heros-tau.vercel.app/',
      projetoNumber: 1,
    },
    {
      title: 'Vejoflix',
      description: 'Projeto criado para salvar vídeos por categorias.',
      image: 'assets/vejoflix/vejoflix2.png',
      category: 'Fullstack',
      tecnologia: 'React js, Node Js e AWS EC2',
      site: 'https://vejoflix.vercel.app/',
      projetoNumber: 2,
    },
    {
      title: 'Desafio 7 dias',
      description:
        'Desafio técnico realizado em uma semana para uma entrevista de emprego.',
      image: 'assets/act_challenger/home.png',
      category: 'Fullstack',
      tecnologia:
        'Angular, Node JS, PHP, Dockers, Postman, AWS EC2, e Testes unitários.',
      site: 'https://act-gerenciador-funcionarios.vercel.app/login',
      projetoNumber: 3,
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
