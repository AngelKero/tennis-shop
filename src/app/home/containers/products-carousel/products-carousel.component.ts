import { Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;

  @ViewChild('pagination') pagination?: ElementRef<HTMLDivElement>;

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 35,
    pagination: {
      clickable: true,
      type: 'bullets',
      el: this.pagination?.nativeElement
    },
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 25
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 35
      }
    }
  };

  slideActive = 1;

  onSlideChange() {
    const swiper = this.swiper?.swiperRef;
    this.slideActive = (swiper?.realIndex || 0) + 1;
  }

  slideNext(){
    this.swiper?.swiperRef.slideNext(100);
  }

  slidePrev(){
    this.swiper?.swiperRef.slidePrev(100);
  }

  goto(index: number){
    this.swiper?.swiperRef.slideTo(index - 1, 100);
  }
}
