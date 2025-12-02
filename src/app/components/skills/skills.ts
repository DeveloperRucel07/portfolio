import { Component } from '@angular/core';
import { Button } from "../button/button";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills',
  imports: [Button, TranslatePipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {

}
