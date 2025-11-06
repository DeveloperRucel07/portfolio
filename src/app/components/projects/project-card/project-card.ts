import { Component, EventEmitter, input, Output, output } from '@angular/core';

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

  @Output() cardClicked = new EventEmitter<number>();
  isExpanded = input<boolean>();

  onCardClick() {
    this.cardClicked.emit(this.index());
    console.log('Card clicked:', this.index());
  }
}
