import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(@Inject(DOCUMENT) private document: Document ){}
  openMenu(){
    const menu = this.document.querySelector(".sub-menu");
    menu?.classList.toggle("opened");
  }
}
