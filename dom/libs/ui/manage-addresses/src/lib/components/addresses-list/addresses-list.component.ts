import { Component, EventEmitter, Output, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import * as Models from '@dom/common/dto';

@Component({
  selector: 'dom-addresses-list',
  templateUrl: './addresses-list.component.html',
  styleUrls: ['./addresses-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddressesListComponent implements OnInit,OnChanges {

  columns: (keyof Models.Address)[] = ['addressLine1', 'addressLine2', 'postalCode', 'locality', 'country', 'deleted'];

  @Input() canSelectAddress: boolean;
  @Input() items: Models.Address[];

  @Output() rowClick = new EventEmitter<Models.Address>();
  @Output() deleteClick = new EventEmitter<Models.Address>();
  @Output() selectClick = new EventEmitter<Models.Address>();

  private selectPreventEmit = false;

  ngOnInit(): void {
    this.selectPreventEmit = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.canSelectAddress) {
      if (this.canSelectAddress) {
        this.columns = ['selected', ...this.columns.filter(c => c !== 'selected')];
      } else {
        this.columns = this.columns.filter(c => c !== 'selected');
      }
    }
  }

  onRowClicked(item: Models.Address, event: MouseEvent) {
    event.preventDefault();
    if(!this.selectPreventEmit){
      this.rowClick.emit(item);
    }
  }

  onDeleteClicked(address: Models.Address, event: MouseEvent) {
    event.preventDefault();
    this.deleteClick.emit(address);
  }

  onSelectClicked(address: Models.Address, event: MouseEvent) {
    event.preventDefault();
    this.selectPreventEmit = true;
    this.selectClick.emit(address);
  }
}

