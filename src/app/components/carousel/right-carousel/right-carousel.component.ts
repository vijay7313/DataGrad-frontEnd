import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@Component({

  selector: 'app-right-carousel',
  standalone: true,
  imports: [
    SlickCarouselModule,
  ],
  templateUrl: './right-carousel.component.html',
  styleUrl: './right-carousel.component.css'
})
export class RightCarouselComponent {

  slides = [
    { img: 'assets/images/carousel/right-carousel/image1.png' },
    { img: 'assets/images/carousel/right-carousel/image2.png' },
    { img: 'assets/images/carousel/right-carousel/image3.png' },
    { img: 'assets/images/carousel/right-carousel/image4.png' },
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
