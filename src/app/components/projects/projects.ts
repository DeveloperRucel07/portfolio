import { Component, ElementRef, EventEmitter, HostListener, ViewChild } from '@angular/core';
import { Button } from "../button/button";
import { ProjectCard } from "./project-card/project-card";
import { Project } from '../../project.interface';

@Component({
  selector: 'app-projects',
  imports: [Button, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  expandedCardIndex: number  = 0;
  projects: Project[] = [
    {
      projectName: 'Project Join',
      aboutProject: 'Task management inspired by Kanban System. Create and Organise Tasks using drag and drop functions. assign users and categories.',
      usedTechno: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      earnedSkills: ['Direct application of acquired knowledge in JavaScript, HTML, and CSS. Insight into professional teamwork with Scrum and tools like Git and Figma.' ],
      githubLink: 'https://github.com/DeveloperRucel07/Join',
      projectLink: 'https://join.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_join.png'
    }, 

    {
      projectName: 'Project Sharkie',
      aboutProject: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      usedTechno: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      earnedSkills: ['Deepening my knowledge of JavaScript. Learning and applying object-oriented programming (OOP), using browser events.'],
      githubLink: 'https://github.com/DeveloperRucel07/sharkie',
      projectLink: 'https://sharkie.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_sharkie.png'
    },

    {
      projectName: 'Project ShopDev',
      aboutProject: 'A complete Ecommerce website with a functional shopping cart, wish list, and user authentication system. Payement integration usin Card and PayPal.',
      usedTechno: ['Angular', 'Firebase', 'Tailwind CSS', 'HTML', 'SCSS'],
      earnedSkills: [' Comprehensive understanding of Angular. Using Firebase for backend services. Implementing responsive design with Tailwind CSS.'],
      githubLink: 'https://github.com/DeveloperRucel07/shopdev',
      projectLink: 'https://shopdev.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_shopdev.png'
    }, 

  ]

  toggleCardExpansion(index: number) {
    if (this.expandedCardIndex === index) {
      this.expandedCardIndex = 0;
    } else {
      this.expandedCardIndex = index;
    }
    console.log('Toggled card expansion. Expanded card index:', this.expandedCardIndex);
  }

  @ViewChild('projectList', {static: false}) projectList!: ElementRef<HTMLDivElement>;
  activeIndex = 0;
  constructor() {}

    ngAfterViewInit() {
    const el = this.projectList?.nativeElement;
    if(!el){
      console.warn('projectList not yet available in ngAfterViewInit');
      return
    }
    el.addEventListener('scroll', () => this.updateActiveIndex());
  }

  scrollToMessage(index: number) {
    const container = this.projectList.nativeElement;
    const width = container.clientWidth;
    container.scrollTo({ left: width * index, behavior: 'smooth' });
    this.activeIndex = index;
  }

  updateActiveIndex() {
    const container = this.projectList.nativeElement;
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
    const index = Math.round(scrollLeft / width);
    this.activeIndex = index;
  }

  @HostListener('window:resize')
  onResize() {
    this.updateActiveIndex();
  }



}
