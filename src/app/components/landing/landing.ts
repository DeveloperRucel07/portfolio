import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'app-landing',
  imports: [Button],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})

export class Landing implements AfterViewInit {

  @ViewChild('typingText') typingText!: ElementRef<HTMLHeadingElement>;
  
  words = ['Frontend Developer', 'Digital Transformer', 'Vibe Code Cleanup'];
  typingSpeed = 100; 
  erasingSpeed = 50;
  delayBetweenWords = 2000; 
  

  /**
   * after the view component is loaded the function start tyoing function.
   */
  ngAfterViewInit() {
    this.startTyping(0);
  }

  /**
   * handle the animation loop type word and erase them and then move to the next word
   * @param index index of the word in the word list.
   */
  async startTyping(index: number) {
    const word = this.words[index];
    await this.typeWord(word);
    await this.wait(this.delayBetweenWords);
    await this.eraseWord();
    this.startTyping((index + 1) % this.words.length);
  }
   
  /**
   * type the actual word give in parameter with the speed.
   * @param word the actual word.
   * @returns 
   */
  typeWord(word: string) {
    return new Promise<void>((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.typingText.nativeElement.textContent = word.slice(0, i + 1);
        i++;
        if (i === word.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
    });
  }

  /**
   * erase the current word after 2s
   * @returns 
   */
  eraseWord() {
    return new Promise<void>((resolve) => {
      let text = this.typingText.nativeElement.textContent || '';
      let i = text.length;
      const interval = setInterval(() => {
        this.typingText.nativeElement.textContent = text.slice(0, i - 1);
        i--;
        if (i === 0) {
          clearInterval(interval);
          resolve();
        }
      }, this.erasingSpeed);
    });
  }

  /**
   * the time that the word word should have before it will be erased.
   * @param ms time in ms
   * @returns 
   */
  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }



}
