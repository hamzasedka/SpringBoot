import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  @Input() filesLimit = 10;
  @Output() filesDroppped = new EventEmitter<File[]>();

  isHovering: boolean;
  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(receivedFiles: FileList) {
    for (let i = 0; i < receivedFiles.length; i++) {
      if (this.files.length < this.filesLimit) {
        this.files.push(receivedFiles.item(i));
      }
      else {
        break;
      }
    }
    this.filesDroppped.emit(this.files);
  }

}
