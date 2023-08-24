import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(@Inject(DOCUMENT) private document: Document ){}
  openMenu(){
    const menu = this.document.querySelector(".sub-menu");
    menu?.classList.toggle("opened");
  }
}
