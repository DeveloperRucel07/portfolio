import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {
  navigateTo = input<string>();

}
