import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { RoutingService } from '../routing.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  toolName$: Observable<string> = this.routingService.toolName$;

  @Input() title: string;

  @Input() userEmail: string;

  @Input() userPhoto: SafeUrl;

  @Input() canNavigate: boolean;

  @Input() canInstall: boolean;

  @Output() readonly menuButtonClick = new EventEmitter<MouseEvent>();

  @Output() readonly disconnectButtonClick = new EventEmitter<MouseEvent>();

  @Output() readonly navigateBackButtonClick = new EventEmitter<MouseEvent>();

  @Output() readonly installButtonClick = new EventEmitter<MouseEvent>();

  constructor(private readonly routingService: RoutingService) {}

  onMenuButtonClicked(event: MouseEvent): void {
    this.menuButtonClick.emit(event);
  }

  onDisconnectButtonClicked(event: MouseEvent): void {
    this.disconnectButtonClick.emit(event);
  }

  onNavigateBackButtonClicked(event: MouseEvent): void {
    this.navigateBackButtonClick.emit(event);
  }

  onInstallButtonClicked(event: MouseEvent): void {
    this.installButtonClick.emit(event);
  }
}
