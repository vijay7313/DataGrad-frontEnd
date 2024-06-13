import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftCarouselComponent } from './components/carousel/left-carousel/left-carousel.component';
import { RightCarouselComponent } from './components/carousel/right-carousel/right-carousel.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
const routes: Routes = [
  {
    path:'',component:HeroBannerComponent
  },
  {
    path:'right',component:RightCarouselComponent
  },
  {
    path:'left',component:LeftCarouselComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
