import {
  Component,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  HostBinding,
  Input,
} from '@angular/core';
import { Router, RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-follow-on',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './follow-on.component.html',
  styleUrl: './follow-on.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class FollowOnComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

 

  ngOnInit() {
    // this.renderer.setStyle(document.body, 'background', '#7fffd4');
    this.renderer.setStyle(document.body, 'height','100px');
    this.renderer.setStyle(document.body, 'background-size', '100% 100%');
    // this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    // this.renderer.setStyle(document.body, 'background-attachment', 'fixed')
  }
}
