import { Component, ElementRef, HostListener, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('portfolio');

  @ViewChild('scrollable') scrollable!: ElementRef<HTMLDivElement>;

  constructor() {}

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.scrollable?.nativeElement) return;
    const deltaY = event.deltaY;
    const step = 7;
    this.scrollable.nativeElement.scrollLeft += deltaY*step;
  }






}
