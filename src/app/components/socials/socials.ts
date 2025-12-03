import { Component, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.html',
  styleUrl: './socials.scss',
})
export class Socials {

  private translate = inject(TranslateService);
  
  changeLanguage(lang: 'en' | 'de') {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }
  saved = localStorage.getItem('language') || 'de';

  constructor(){
    this.checkLanguage();
    this.translate.onLangChange.subscribe(() => {
        this.checkLanguage();
    });
  }

  checkLanguage(){
    this.saved = localStorage.getItem('language') || 'de';
  }

}
