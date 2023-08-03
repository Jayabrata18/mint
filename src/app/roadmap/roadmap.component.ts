import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent {
  constructor(@Inject(DOCUMENT) private document: Document ){}
  openMenu(){
    const menu = this.document.querySelector(".sub-menu");
    menu?.classList.toggle("opened");
  }
}
