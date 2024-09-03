import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { FollowOnComponent } from "../follow-on/follow-on.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterOutlet, FollowOnComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  encapsulation:ViewEncapsulation.Emulated,
})
export class ContactComponent implements OnInit {
  constructor(private renderer: Renderer2,private route:Router) {
    this.renderer = renderer;
  }

 contactForm = new FormGroup({
  userName:new FormControl('',[Validators.required,Validators.minLength(3)]),
  email:new FormControl(),
  country:new FormControl(),
  textArea: new FormControl()
 })

 get userName(){
  return this.contactForm.get('userName')
}
get email(){
  return this.contactForm.get('email')
}
get country(){
  return this.contactForm.get('country')
}
get textArea(){
  return this.contactForm.get('textArea')
}

 submitForm(){
  console.log(this.contactForm)
  setTimeout(()=>{
    alert('Thank you for contacting me');
    setTimeout(()=>{

      this.route.navigate(['/Home'])
    },1500)
  },2000)
 }

  ngOnInit() {
    this?.renderer?.setStyle(
      document.body,
      'background',
      '#15e3eb'
    );
    this.renderer.setStyle(document.body, 'background-size', '100% 100%');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
  }
}
