import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ElementRef,
  HostListener,
} from "@angular/core";
import * as $ from "jquery";
import Swiper from "swiper";
declare var Swiper: any;

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements AfterViewInit,OnInit {
  constructor(private elementRef: ElementRef) {}

  swiper;
  ngAfterViewInit() {
    this.swiper = new Swiper(
      this.elementRef.nativeElement.querySelector(".swiper-container"),
      {
        slidesPerView: 3,
        loop: true,
        draggable: true,
        spaceBetween: 30,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
        },
      }
    );
    this.swiper.slideTo(2, false,false);
    this.swiper.on('transitionEnd', function (this) {
      console.log(this.realIndex)
    });
  }
  ngOnInit(){

  }
}
