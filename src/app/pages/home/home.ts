import { Component, ViewChild, ElementRef, OnInit, AfterViewInit, HostListener } from '@angular/core';
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
export class Home implements OnInit, AfterViewInit {
  @ViewChild('mainContent') mainContent!: ElementRef<HTMLDivElement>;
  private isLargeScreen = false;

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', () => this.checkScreenSize());
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.mainContent?.nativeElement) {
        this.mainContent.nativeElement.scrollLeft = 0;
      }
    }, 100);
  }

  private checkScreenSize() {
    this.isLargeScreen = window.innerWidth > 1500;
  }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (!this.isLargeScreen) return;
    if (!this.mainContent) return;
    event.preventDefault();
    const container = this.mainContent.nativeElement;
    const scrollStep = container.clientWidth;
    if (event.deltaY > 0) {
      container.scrollLeft += scrollStep;
    } else {
      container.scrollLeft -= scrollStep;
    }
    if (container.scrollLeft < 0) container.scrollLeft = 0;
    if (container.scrollLeft > container.scrollWidth - container.clientWidth) {
      container.scrollLeft = container.scrollWidth - container.clientWidth;
    }
  }
  
}

