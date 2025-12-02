import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer";
import { Button } from "../../components/button/button";
import { RouterLink } from "@angular/router";
import { TranslatePipe } from '@ngx-translate/core';
import { Socials } from "../../components/socials/socials";

@Component({
  selector: 'app-privacy-policy',
  imports: [Footer, Button, RouterLink, TranslatePipe, Socials],
  templateUrl: './privacy-policy.html',
  styleUrl: './privacy-policy.scss',
})
export class PrivacyPolicy {

}
