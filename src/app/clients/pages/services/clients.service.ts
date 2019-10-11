import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private itemsCollection: AngularFirestoreCollection<Client>;
  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = afs.collection<Client>('clients');
    // this.collection = this.http.get(`${this.urlApi}collection`).pipe(
    //   map(tab => tab.map(obj => new Prestation(obj))
    // );
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj))
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
  }
  // get collection
  public get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(param: Observable<Client[]>) {
    this.pCollection = param;
  }

  // add item in collection
  public add(item: Client): Promise<any> {
    const id = this.afs.createId();
    const client = { id, ...item };
    return this.itemsCollection.doc(id).set(client).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${this.urlApi}collection/`, item);
  }
  // update item in collection
  public update(item: Client, option?: StateClient): Promise<any> {
    const client  = {...item};
    if (option) {
      client.state = option;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });
     // return this.http.put(`${this.urlApi}collection/`, item);
  }

    // get item by id
    public getClient(id: string): Observable<Client> {
      return this.itemsCollection.doc<Client>(id).valueChanges();
      // return this.http.get(`${this.urlApi}collection`, id);
    }

    // delete item in collection
    public delete(item: Client): Promise<any> {
      return this.itemsCollection.doc(item.id).delete().catch((e) => {
        console.log(e);
      });
       // return this.http.delete(`${this.urlApi}collection/`, item);
    }
}
