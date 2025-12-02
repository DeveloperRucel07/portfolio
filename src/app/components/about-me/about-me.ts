import { Component } from '@angular/core';
import { Button } from "../button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [Button, TranslatePipe],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {

}
