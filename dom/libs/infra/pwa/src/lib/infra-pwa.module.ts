import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePromptComponent } from './components/update-prompt/update-prompt.component';
import { AppMaterialDesignModule } from '@dom/ui/common';
import { SuggestInstallPromptComponent } from './components/suggest-install-prompt/suggest-install-prompt.component';
import { PwaService } from './pwa.service';
import { NotificationModule } from '@dom/ui/common';

@NgModule({
  imports: [CommonModule, AppMaterialDesignModule, NotificationModule],
  declarations: [UpdatePromptComponent, SuggestInstallPromptComponent],
  exports: [UpdatePromptComponent],
  entryComponents: [UpdatePromptComponent],
  providers:[PwaService]
})
export class InfraPwaModule {}
