import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {
  public faBars = faBars;
  public open = false;
  constructor() { }

  ngOnInit() {
  }

  toggle() {
  this.open = !this.open;
  }
}
