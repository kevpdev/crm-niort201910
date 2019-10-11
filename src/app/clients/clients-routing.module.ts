import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageEditClientComponent } from './pages/page-edit-client/page-edit-client.component';

const appRoutes: Routes = [
  { path: '',
    component: PageClientsComponent,
    data: {title: 'Clients', label: 'Tous les clients'}
   },
   { path: 'add',
   component: PageAddClientComponent,
   data: {title: 'Clients', label: 'Ajouter un client'}
  },
  { path: 'edit/:id',
  component: PageEditClientComponent,
  data: {title: 'Clients', label: 'Editer un client'}
 }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
