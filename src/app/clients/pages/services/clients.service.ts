import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Client[];
  constructor() {
    this.collection = fakeClients;
  }
  // get collection
  public get collection(): Client[] {
    return this.pCollection;
  }
  // set collection
  public set collection(param: Client[]) {
    this.pCollection = param;
  }


  // get collection
  // set collection
  // add item in collection
  // update item in collection
  update(item: Client, value: StateClient) {
    console.log(item);
    item.state = value;
    console.log(item);
  }
}
