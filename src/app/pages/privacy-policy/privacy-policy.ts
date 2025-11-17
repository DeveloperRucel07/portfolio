import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, Button, RouterLink],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {

}
