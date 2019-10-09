import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients/pages/services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public headers: string[];
  public collection: Client[];
  public states = StateClient;
  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientsService.collection;
    this.headers = [
      'Nom',
      'Email',
      'State'
    ];
  }

  changeState(item: Client, param) {
    console.log(param.target.value);
    this.clientsService.update(item, param.target.value);
  }

}
