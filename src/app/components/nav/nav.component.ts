import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss',]
})
export class NavComponent {
  mobileMenuIcon:string = "../../../assets/images/icon-hamburger.svg";
  isActive:boolean = false;

  toggleMobileMenu() {
    if(!this.isActive) {
      this.mobileMenuIcon = "../../../assets/images/icon-close.svg";
      this.isActive = !this.isActive
    } else {
      this.mobileMenuIcon =  "../../../assets/images/icon-hamburger.svg";
      this.isActive = !this.isActive
    }
  }
}
