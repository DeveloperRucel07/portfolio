import { Component, input } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.scss',
})
export class Message {
  
  message = input.required<string>();
  developerName = input.required<string>();
  projectName = input.required<string>();

}
