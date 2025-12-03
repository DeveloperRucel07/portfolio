import { Component, ElementRef, EventEmitter, HostListener, inject, ViewChild } from '@angular/core';
import { Button } from "../button/button";
import { ProjectCard } from "./project-card/project-card";
import { Project } from '../../project.interface';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [Button, ProjectCard, TranslatePipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  private translate = inject(TranslateService)
  expandedCardIndex: number  = 0;
  projects: Project[] = [
    {
      id:"description_join",
      projectName: 'Projekt Join',
      aboutProject: '',
      usedTechno: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      earnedSkills: '',
      githubLink: 'https://github.com/DeveloperRucel07/Join',
      projectLink: 'https://join.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_join.png'
    }, 

    {
      id:"description_sharkie",
      projectName: 'Projekt Sharkie',
      aboutProject: '',
      usedTechno: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      earnedSkills: '',
      githubLink: 'https://github.com/DeveloperRucel07/sharkie',
      projectLink: 'https://sharkie.rucel-tsafack.com/index.html',
      projectImage: 'https://rucel-tsafack.com/assets_icons/project_sharkie.png'
    },

    {
      id:"description_shopdev",
      projectName: 'Projekt ShopDev',
      aboutProject: '',
      usedTechno: ['Angular','Material Design', 'Tailwind CSS', 'HTML', 'SCSS'],
      earnedSkills: '',
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
  constructor() {
    this.loadTranslationsForProjects();
    this.translate.onLangChange.subscribe(() => {
      this.loadTranslationsForProjects();
    });
  }

  private async loadTranslationsForProjects() {
    for (const p of this.projects) {
      p.aboutProject = await firstValueFrom(this.translate.get(`projects.${p.id}.about`));
      p.earnedSkills = await firstValueFrom(this.translate.get(`projects.${p.id}.know_how`));
    }
  }

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
