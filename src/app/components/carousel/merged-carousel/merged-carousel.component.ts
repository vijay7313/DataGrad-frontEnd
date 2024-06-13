import { Component } from '@angular/core';
import { RightCarouselComponent } from '../right-carousel/right-carousel.component';
import { LeftCarouselComponent } from '../left-carousel/left-carousel.component';

@Component({
  selector: 'app-merged-carousel',
  standalone:true,
  imports: [
    RightCarouselComponent,LeftCarouselComponent
  ],
  templateUrl: './merged-carousel.component.html',
  styleUrl: './merged-carousel.component.css'
})
export class MergedCarouselComponent {

}
