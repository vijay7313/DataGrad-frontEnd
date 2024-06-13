import { Component } from '@angular/core';
import { MergedCarouselComponent } from '../carousel/merged-carousel/merged-carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [
    MergedCarouselComponent,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css',
})
export class HeroBannerComponent {
  isSmallScreen = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }
}
