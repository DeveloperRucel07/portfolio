import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { Landing } from "../../components/landing/landing";
import { AboutMe } from "../../components/about-me/about-me";
import { Skills } from "../../components/skills/skills";
import { Projects } from "../../components/projects/projects";
import { Testimoni } from "../../components/testimoni/testimoni";
import { Contact } from "../../components/contact/contact";
import { Socials } from "../../components/socials/socials";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Landing, AboutMe, Skills, Projects, Testimoni, Contact, Socials, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

   @ViewChild('mainContent') scrollable!: ElementRef<HTMLDivElement>;

  constructor() {}

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.scrollable?.nativeElement) return;
    const deltaY = event.deltaY;
    const step = 7;
    this.scrollable.nativeElement.scrollLeft += deltaY*step;
  }
  

}
