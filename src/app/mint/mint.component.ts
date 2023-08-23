import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-mint',
  templateUrl: './mint.component.html',
  styleUrls: ['./mint.component.scss'],
})
export class MintComponent implements OnInit {
  slideIndex: number = 1;


  constructor(@Inject(DOCUMENT) private document: Document) {
  }
  ngOnInit(): void {
    if(window.innerWidth < 420){
      this.showDivs(this.slideIndex);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(window.innerWidth < 420)
      this.showDivs(this.slideIndex);
    else{
      this.setAllBlock();
    }
  }

  setAllBlock(){
    let x: any = this.document.getElementsByClassName('slide');
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }

  showDivs(n: number) {
    let x: any = this.document.getElementsByClassName('slide');
    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[this.slideIndex - 1].style.display = "block";
  }

  plusDivs(n: number) {
    this.showDivs(this.slideIndex += n);
  }


}
