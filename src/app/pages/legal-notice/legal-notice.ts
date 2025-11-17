import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-legal-notice',
  imports: [Footer, Button, RouterLink],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {

}
