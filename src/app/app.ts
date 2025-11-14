import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');

  @ViewChild('scrollable') scrollable!: ElementRef<HTMLDivElement>;

  constructor() {}

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
    const anyEv = event as WheelEvent & { wheelDelta?: number; detail?: number };
    if (typeof anyEv.wheelDelta === 'number') {
      return -anyEv.wheelDelta;
    }
    if (typeof anyEv.detail === 'number') {
      return anyEv.detail;
    }
    return 0;
  }

}
