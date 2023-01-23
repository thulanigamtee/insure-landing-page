import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  isDesktop:boolean = false
  introImageMobile:string = '../../../assets/images/image-intro-mobile.jpg'
  introImageDesktop:string = '../../../assets/images/image-intro-desktop.jpg'
}
