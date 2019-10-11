import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  public faEdit = faEdit;
  public faTrashAlt = faTrashAlt;
  @Output() emitEdit: EventEmitter<any> = new EventEmitter();
  @Output() emitDelete: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  edit() {
    console.log('click edit');

    this.emitEdit.emit();
  }

  delete() {
    this.emitDelete.emit();
  }

}
