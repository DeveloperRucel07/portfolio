import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Button } from "../button/button";
import { TestimoniInterface } from '../../testimoni.interface';
import { Message } from "./message/message";

@Component({
  selector: 'app-testimoni',
  imports: [Button, Message],
  templateUrl: './testimoni.html',
  styleUrl: './testimoni.scss',
})
export class Testimoni implements AfterViewInit{
  @ViewChild('messageList', {static: false}) messageList!: ElementRef<HTMLDivElement>;

  testimonies:TestimoniInterface[] = [

    {
      message:'‘‘Rucel ist ein zuverlässiger und freundlicher Mensch. Er arbeitet strukturiert und schreibt sauberen Code. Ich empfehle ihn als Kollegen.’’',
      developerName:'Tino Wulf',
      projectName:'Project Join'
    },

    {
      message:'‘‘Er ist ein zuverlässiger Teamplayer und kann mit dem Druck von Abgabeterminen gut umgehen. Strukturierte Arbeitsweise und sauberer Code.‘’',
      developerName:'Enrico H.',
      projectName:'Project KochWelt'
    },

    {
      message:'‘‘Rucel konnte in Zusammenarbeit mit den Teammitgliedern Inhalte entwickeln, formatieren und präsentieren. Er ist eine zuverlässige und freundliche Person.’’',
      developerName:'Junus Ergin',
      projectName:'Project Join'
    },


  ]

  activeIndex = 0;

  ngAfterViewInit() {
    const el = this.messageList?.nativeElement;
    if(!el){
      return
    }
    el.addEventListener('scroll', () => this.updateActiveIndex());
  }

  scrollToMessage(index: number) {
    const container = this.messageList.nativeElement;
    const width = container.clientWidth;
    container.scrollTo({ left: width * index, behavior: 'smooth' });
    this.activeIndex = index;
  }

  updateActiveIndex() {
    const container = this.messageList.nativeElement;
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
