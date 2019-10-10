import { Component, OnInit, Input } from '@angular/core';
import { InjectSetupWrapper } from '@angular/core/testing';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {
  @Input() title: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

}
