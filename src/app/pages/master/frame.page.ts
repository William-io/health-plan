import { Component } from '@angular/core';

@Component({
  selector: 'app-frame.page',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class FramePageComponent {
  title = 'healthPlan';
}
