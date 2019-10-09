import { PrestationI } from '../interfaces/prestation-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHt = 500;
  tauxTva = 20;
  state = State.OPTION;
  comment: string;

  constructor(obj?: Partial<Prestation>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }
  totalHt(): number {
    return this.nbJours * this.tjmHt;
  }
  totalTtc(tva?: number): number {
    if (tva) {
      if (tva <= 0) {
        return this.totalHt();
      }
      return this.totalHt() * (1 + tva / 100);
    }
    return this.totalHt() * (1 + this.tauxTva / 100);
  }

}
