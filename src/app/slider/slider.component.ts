import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{
    index: number = 0;
    slider: any;
    slides: any;  
    image: any;

    constructor(@Inject(DOCUMENT) private document: Document ) {}

    ngOnInit(): void {
      this.slider = document.querySelector(".slider");
      this.slides = document.querySelectorAll(".slide");
      this.image = document.querySelector(".slide_header");
      setInterval(() => {
        this.slides[this.index].classList.remove('active');
        this.index = (this.index === this.slides.length - 1) ? 0 : this.index + 1;
        this.slides[this.index].classList.add('active');
        this.slider.style.transform = `translateX(-${this.index * 100}%)`
      },6000)
    }


}
