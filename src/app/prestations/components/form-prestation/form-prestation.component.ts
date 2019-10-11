import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation';


@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {
  public states = State;
  public form: FormGroup;
  @Input() initForm = new Prestation();
  @Output() nItem: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.initForm.typePresta,
        Validators.required
    ],
      client: [
        this.initForm.client,
        Validators.compose([Validators.required, Validators.minLength(3)]
      )],
      nbJours: [this.initForm.nbJours],
      tjmHT: [this.initForm.tjmHt],
      tauxTva: [this.initForm.tauxTva],
      state: [this.initForm.state],
      comment: [this.initForm.comment],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.nItem.emit(this.form.value);
  }

}
