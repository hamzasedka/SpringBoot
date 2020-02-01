import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dom-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {
  @Input() filesLimit = 1;
  @Output() filesDroppped = new EventEmitter<File[]>();

  isHovering: boolean;
  files: File[] = [];

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    for (let i = 0; i < files.length && files.length <= this.filesLimit; i++) {
      this.files.push(files.item(i));
    }
    this.filesDroppped.emit(this.files);
  }

}
