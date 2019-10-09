import { Directive, Input, OnInit, HostBinding, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {


  @Input() appState: any;
  @HostBinding('class') tdClass: string;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.appState);
    this.tdClass = this.formatClass(this.appState);
  }

  private formatClass(state: any): string {
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f\s]/g, '').toLowerCase()}`;
  }

}
