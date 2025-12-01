import { Component, inject } from '@angular/core';
import {TranslatePipe, TranslateDirective, TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  imports: [TranslatePipe,],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;

  private translate = inject(TranslateService);
  
  changeLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  saved = localStorage.getItem('language');

  

  
  constructor(){
    this.translate.addLangs(['en', 'de']);

    this.translate.use(this.saved || 'en');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

}
