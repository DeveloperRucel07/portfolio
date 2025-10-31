import { Component } from '@angular/core';
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
  projects: Project[] = [
    {
      projectName: 'Project Join',
      aboutProject: 'Task management inspired by Kanban System. Create and Organise Tasks using drag and drop functions. assign users and categories.',
      usedTechno: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      earnedSkills: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium, laboriosam error ratione eius soluta repellendus repellat ullam facilis? Commodi laborum illum, non rerum perspiciatis dicta recusandae in modi provident!' ],
      githubLink: 'https://github.com/DeveloperRucel07/Join',
      projectLink: 'https://join.rucel-tsafack.com/index.html',
      projectImage: '../../../../../icons/project_join.png'
    }, 

    {
      projectName: 'Project Sharkie',
      aboutProject: 'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      usedTechno: ['OOP', 'JavaScript', 'HTML', 'CSS'],
      earnedSkills: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium, laboriosam error ratione eius soluta repellendus repellat ullam facilis? Commodi laborum illum, non rerum perspiciatis dicta recusandae in modi provident!' ],
      githubLink: 'https://github.com/DeveloperRucel07/sharkie',
      projectLink: 'https://sharkie.rucel-tsafack.com/index.html',
      projectImage: '../../../../../icons/project_sharkie.png'
    },

    {
      projectName: 'Project Join',
      aboutProject: 'Task management inspired by Kanban System. Create and Organise Tasks using drag and drop functions. assign users and categories.',
      usedTechno: ['JavaScript', 'Firebase', 'HTML', 'CSS'],
      earnedSkills: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium, laboriosam error ratione eius soluta repellendus repellat ullam facilis? Commodi laborum illum, non rerum perspiciatis dicta recusandae in modi provident!' ],
      githubLink: 'https://github.com/DeveloperRucel07/Join',
      projectLink: 'https://join.rucel-tsafack.com/index.html',
      projectImage: '../../../../../icons/project_join.png'
    }, 

  ]

}
