import { AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { Button } from "../button/button";
import { TestimoniInterface } from '../../testimoni.interface';
import { Message } from "./message/message";
import { firstValueFrom } from 'rxjs';
import { TranslateDirective, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-testimoni',
  imports: [Button, Message],
  templateUrl: './testimoni.html',
  styleUrl: './testimoni.scss',
})
export class Testimoni implements AfterViewInit{
  translate = inject(TranslateService)
  @ViewChild('messageList', {static: false}) messageList!: ElementRef<HTMLDivElement>;

  testimonies:TestimoniInterface[] = [

    {
      message: '',
      developerName:'Tino Wulf',
      projectName:'Project Join'
    },

    {
      message:'',
      developerName:'Enrico H.',
      projectName:'Project KochWelt'
    },

    {
      message:'',
      developerName:'Andreas B.',
      projectName:'Project Join'
    },
  ]

  constructor(){
      this.loadTranslations();
      this.translate.onLangChange.subscribe(() => {
        this.loadTranslations();
      });
    
  }


  async loadTranslations() {
  this.testimonies[0].message =
    await firstValueFrom(this.translate.get('teamplayer.message_1'));

  this.testimonies[1].message =
    await firstValueFrom(this.translate.get('teamplayer.message_2'));

  this.testimonies[2].message =
    await firstValueFrom(this.translate.get('teamplayer.message_3'));
}

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
