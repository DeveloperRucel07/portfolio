import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {
  
  message = input<string>();
  developerName = input<string>();
  projectName = input<string>();

}
