import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  OnInit,
  Renderer2,
  ViewChild,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FollowOnComponent } from '../follow-on/follow-on.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FollowOnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChild('aboutBtn', { static: false }) aboutBtn!: ElementRef;
  constructor(private renderer: Renderer2, private route: Router) {}

  ngOnInit() {
    this?.renderer?.setStyle(
      document.body,
      'background',
      'url("../../assets/images/portfolioBackground.jpg")'
    );
    this.renderer.setStyle(document.body, 'background-size', '100% 100%');
    this.renderer.setStyle(document.body, 'background-repeat', 'no-repeat');
    this.renderer.setStyle(document.body, 'background-attachment', 'fixed');
    
  }
  
  ngAfterViewInit(): void {
    this.aboutBtn.nativeElement.addEventListener('click', () => {
      this.route.navigate(['/About']);
    });
  }
}
