import { StateClient } from '../enums/state-client.enum';

export class Client {
id: string;
name: string;
email: string;
state = StateClient.ACTIF;

constructor(obj?: Partial<Client>) {
  if (obj) {
    Object.assign(this, obj);
  }
}
}
