import { Component } from '@angular/core';
import { PwaService } from '@dom/infra/pwa';

@Component({
  selector: 'dom-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private readonly pwaService: PwaService) {
    this.pwaService.activate();
  }
}
