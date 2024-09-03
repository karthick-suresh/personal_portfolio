import {
  Component,
  Renderer2,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FollowOnComponent } from '../follow-on/follow-on.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FollowOnComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class AboutComponent implements OnInit, AfterViewInit {
  constructor(private renderer: Renderer2, private element: ElementRef) {
    this.renderer = renderer;
  }

  personalInformation: boolean = false;
 

  personalInfo() {
    this.personalInformation = !this.personalInformation;

  }

  activeButton: number | null = null;

  toggleProgress(buttonNum: number) {
    this.activeButton = this.activeButton === buttonNum ? null : buttonNum;
  }

  ngOnInit() {
    this?.renderer?.setStyle(
      document.body,
      'background',
      'url("../../assets/images/about1.jpg")'
    );
    this.renderer.setStyle(document.body, 'background-size', '100% 100%');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
  }
  ngAfterViewInit(): void {}
}
function personalcontent() {
  throw new Error('Function not implemented.');
}
