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
      projectName: 'Projekt Join',
      aboutProject: 'Aufgabenmanagement inspiriert vom Kanban-System. Aufgaben per Drag & Drop erstellen und organisieren. Benutzer und Kategorien zuweisen.',
      usedTechno: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      earnedSkills: ['Direkte Anwendung der erworbenen Kenntnisse in JavaScript, HTML und CSS. Einblick in die professionelle Teamarbeit mit Scrum und Tools wie Git und Figma.' ],
      githubLink: 'https://github.com/DeveloperRucel07/Join',
      projectLink: 'https://join.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_join.png'
    }, 

    {
      projectName: 'Projekt Sharkie',
      aboutProject: 'Ein einfaches Jump-and-Run-Spiel, basierend auf objektorientierter Programmierung. Hilf Sharkie, die Münzen und Giftflaschen zu finden, um den Killerwal zu bekämpfen und den Ozean zu schützen.',
      usedTechno: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      earnedSkills: ['Vertiefung meiner JavaScript-Kenntnisse. Erlernen und Anwenden objektorientierter Programmierung (OOP) unter Verwendung von Browserereignissen.'],
      githubLink: 'https://github.com/DeveloperRucel07/sharkie',
      projectLink: 'https://sharkie.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_sharkie.png'
    },

    {
      projectName: 'Projekt ShopDev',
      aboutProject: 'Eine vollständige E-Commerce-Website mit funktionalem Warenkorb, Wunschliste und Benutzerauthentifizierungssystem. Zahlungsabwicklung per Karte und PayPal.',
      usedTechno: ['Angular','Material Design', 'Tailwind CSS', 'HTML', 'SCSS'],
      earnedSkills: ['Vertiefung meine Angular-Kenntnisse,die nutzunf von Interface und typisierung in angular. implementierung von responsive Design mit Tailwins CSS. '],
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
  }

  @ViewChild('projectList', {static: false}) projectList!: ElementRef<HTMLDivElement>;
  activeIndex = 0;
  constructor() {}

    ngAfterViewInit() {
    const el = this.projectList?.nativeElement;
    if(!el){
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
