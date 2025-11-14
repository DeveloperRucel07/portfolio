import { Component, inject } from '@angular/core';
import { Button } from "../button/button";
import {FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from "@angular/router";
import { Footer } from "../footer/footer";
import { Socials } from "../socials/socials";

@Component({
  selector: 'app-contact',
  imports: [Button, ReactiveFormsModule, RouterLink, Footer, Socials],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  submitting = false;
  successMessage = '';
  submitError = '';

  submitForm: FormGroup = new FormGroup({
    name : new FormControl('', [Validators.required, Validators.minLength(2)]),
    email : new FormControl('', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/), Validators.required]),
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
    agree: new FormControl(false, [Validators.requiredTrue])
  });

  http = inject(HttpClient);

  post = {
    endPoint: 'https://rucel-tsafack.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(){
    
  }


  onSubmit(){
    if(this.submitForm.valid){
      const contactData = this.submitForm.value;
      this.http.post(this.post.endPoint, this.post.body(contactData))
        .subscribe({
          next: (response) => {
            this.submitting = false;
            this.submitForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.submitting = true,
        });
    }else{

      this.submitForm.reset();
    }
  }

  showsuccessMessage(){
    this.submitting = true
    setTimeout(()=>{
      this.submitting = false;
    }, 1000)
  }

  isInvalid(controlName: string): boolean {
    const control = this.submitForm.get(controlName);
    return !!(control && control.invalid && (control.touched || control.dirty));
  }

  showError(controlName: string, errorType?: string): boolean {
    const control = this.submitForm.get(controlName);
    if (!control) return false;
    if (errorType) {
      return !!(control.hasError(errorType) && (control.touched || control.dirty));
    }
    return !!(control.invalid && (control.touched || control.dirty));
  }

}
