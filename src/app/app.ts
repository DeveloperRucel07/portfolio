import { Component, ElementRef, HostListener, inject, Renderer2, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import {
    TranslateService,
    TranslatePipe,
    TranslateDirective
} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('portfolio');
  private translate = inject(TranslateService);

  @ViewChild('scrollable') scrollable!: ElementRef<HTMLDivElement>;

  constructor() {
    this.translate.addLangs(['de', 'en']);
    this.translate.setFallbackLang('en');
    this.translate.use('en');
  }

  @HostListener('window:wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.scrollable?.nativeElement) return;
    const deltaY = event.deltaY;
    const step = 7;
    this.scrollable.nativeElement.scrollLeft += deltaY*step;
  }






}
