import { Component, input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  index= input<number>();
  projectName = input<string>();
  aboutProject = input<string>();
  usedTechno = input<string[]>();
  earnedSkills = input<string[]>();
  githubLink = input<string>();
  projectLink = input<string>();
  projectImage = input<string>();
  
}
