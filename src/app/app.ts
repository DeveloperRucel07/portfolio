import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Landing } from "./components/landing/landing";
import { AboutMe } from "./components/about-me/about-me";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";
import { Testimoni } from "./components/testimoni/testimoni";
import { Contact } from "./components/contact/contact";
import { Socials } from "./components/socials/socials";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Landing, AboutMe, Skills, Projects, Testimoni, Contact, Socials, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
