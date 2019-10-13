import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss']
})
export class FormClientComponent implements OnInit {

  public states = StateClient;
  public form: FormGroup;
  @Input() initForm = new Client();
  @Output() nItem: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      name: [
        this.initForm.name,
        Validators.required
    ],
      email: [
        this.initForm.email,
        Validators.compose([Validators.required]
      )],
      state: [this.initForm.state],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

}
