import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './containers/banner/banner.component';
import { LargeImageComponent } from './containers/large-image/large-image.component';
import { ProductsCarouselComponent } from './containers/products-carousel/products-carousel.component';
import { AboutUsComponent } from './containers/about-us/about-us.component';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    LargeImageComponent,
    ProductsCarouselComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule
  ]
})
export class HomeModule { }
