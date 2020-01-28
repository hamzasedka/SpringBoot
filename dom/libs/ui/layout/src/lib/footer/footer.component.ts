import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dom-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  copyrightYear: number;

  constructor() {
    this.updateCopyrightYear();
  }

  private updateCopyrightYear(): void {
    this.copyrightYear = new Date().getFullYear();
  }
}
