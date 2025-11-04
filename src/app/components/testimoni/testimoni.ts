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
      message:'‘‘Rucel is a reliable and friendly person. Work in a structured way and write a clear code. I recommend him as a colleague.’’',
      developerName:'Tino Wulf',
      projectName:'Project Join'
    },

    {
      message:'‘‘He is a trustworthy teamplayer and can cope with the stress of deadlines. Structured work and clear code.‘’',
      developerName:'Enrico H.',
      projectName:'Project KochWelt'
    },

    {
      message:'‘‘Rucel had to develop, format and deliver content in collaboration with the team members.He is a reliable and friendly person.’’',
      developerName:'Junus Ergin',
      projectName:'Project Join'
    },


  ]

  activeIndex = 0;

  ngAfterViewInit() {
    const el = this.messageList?.nativeElement;
    if(!el){
      console.warn('messageList not yet available in ngAfterViewInit');
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
