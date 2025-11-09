import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Landing } from "./components/landing/landing";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Testimoni } from "./components/testimoni/testimoni";
import { Contact } from "./components/contact/contact";
import { Socials } from "./components/socials/socials";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Landing, AboutMe, Skills, Projects, Testimoni, Contact, Socials, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  @ViewChild('scrollable') scrollable!: ElementRef<HTMLDivElement>;

  constructor() {}

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (!this.scrollable?.nativeElement) return;
    const delta = this.normalizeWheelDelta(event);
    const step = 7;
    this.scrollable.nativeElement.scrollLeft += delta*step;
    event.preventDefault();
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.scrollable?.nativeElement) return;
    const delta = this.normalizeWheelDelta(event);
    const step = 7;
    this.scrollable.nativeElement.scrollLeft += delta*step;
    event.preventDefault();
  }


  private normalizeWheelDelta(event: WheelEvent): number {
    if (typeof event.deltaY === 'number') {
      return event.deltaY;
    }
    const anyEv = event as any;
    if (typeof anyEv.wheelDelta === 'number') {
      return -anyEv.wheelDelta;
    }
    if (typeof anyEv.detail === 'number') {
      return anyEv.detail;
    }
    return 0;
  }

}
