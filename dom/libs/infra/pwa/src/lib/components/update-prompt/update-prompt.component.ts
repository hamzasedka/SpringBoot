import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dom-update-prompt',
  templateUrl: './update-prompt.component.html',
  styleUrls: ['./update-prompt.component.scss']
})
export class UpdatePromptComponent implements OnInit {
  constructor(
    private readonly dialogRef: MatDialogRef<UpdatePromptComponent, boolean>
  ) {}

  ngOnInit(): void {
    this.dialogRef.updateSize('100%', '140px');
  }
}

