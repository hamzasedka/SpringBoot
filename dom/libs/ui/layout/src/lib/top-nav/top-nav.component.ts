import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'dom-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() userEmail: string;

  constructor(public navService: NavService) {}

  ngOnInit() {}
}
