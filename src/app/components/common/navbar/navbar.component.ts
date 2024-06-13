import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  <a mat-button routerLink="/contact">{{ contactLink }}</a>
  <a mat-button routerLink="/address">{{ addressLink }}</a>
`,
styles: [`
  /* Add your styles here */
`]
})
export class NavbarComponent {
  @Input() contactLink: string = 'Contact';
  @Input() addressLink: string = 'Address';

}
