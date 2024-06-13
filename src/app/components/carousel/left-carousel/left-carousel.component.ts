import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-left-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule,
  ],
  templateUrl: './left-carousel.component.html',
  styleUrl: './left-carousel.component.css'
})
export class LeftCarouselComponent {

  slides = [
    { img: 'assets/images/carousel/left-carousel/image1.png' },
    { img: 'assets/images/carousel/left-carousel/image2.png' },
    { img: 'assets/images/carousel/left-carousel/image3.png' },
    { img: 'assets/images/carousel/left-carousel/image4.png' },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 1000,
  };

}

