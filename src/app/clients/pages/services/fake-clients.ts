import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'client1',
    name: 'GFI',
    email: 'contact@gfi.com'
  }),
  new Client({
    id: 'client2',
    name: 'Modis',
    email: 'contact@modis.com'
  }),
];
