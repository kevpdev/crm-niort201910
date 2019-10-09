import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root' // création d'un singleton pour le mettre dans l'injector
})
export class PrestationsService {
  private pCollection: Prestation[];
  constructor() {
    this.collection = fakePrestations;
  }
  // get collection
  public get collection(): Prestation[] {
    return this.pCollection;
  }
  // set collection
  public set collection(param: Prestation[]) {
    this.pCollection = param;
  }

  // get collection
  // set collection
  // add item in collection
  // update item in collection
  // delete item in collection
  // get item by id
}
