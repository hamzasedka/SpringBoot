import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dom-suggest-install-prompt',
  templateUrl: './suggest-install-prompt.component.html',
  styleUrls: ['./suggest-install-prompt.component.scss']
})
export class SuggestInstallPromptComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<SuggestInstallPromptComponent, boolean>
  ) {}

  ngOnInit(): void {
    this.dialogRef.updateSize('100%', '140px');
    this.dialogRef.updatePosition({bottom: '0px'});
  }
}


