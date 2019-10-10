import { Injectable } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation';
import { fakePrestations } from './fake-prestations';
import { State } from 'src/app/shared/enums/state.enum';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // création d'un singleton pour le mettre dans l'injector
})
export class PrestationsService {
  private pCollection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  constructor(
    private afs: AngularFirestore
    ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj))
      map((tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
  }
  // get collection
  public get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }
  // set collection
  public set collection(param: Observable<Prestation[]>) {
    this.pCollection = param;
  }

  public add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
  }

  public update(item: Prestation, option?: State): Promise<any> {
    const presta  = {...item};
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
  }

  // get item by id
  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
  }

  // delete item in collection
  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
  }
}
