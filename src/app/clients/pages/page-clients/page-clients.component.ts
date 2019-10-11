import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients/pages/services/clients.service';
import { Client } from 'src/app/shared/models/client';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page-clients',
  templateUrl: './page-clients.component.html',
  styleUrls: ['./page-clients.component.scss']
})
export class PageClientsComponent implements OnInit {

  public headers: string[];
  public collection$: Observable<Client[]>;
  public states = StateClient;
  public title: string;
  public label: string;
  constructor(
    private clientsService: ClientsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.collection$ = this.clientsService.collection;
    this.headers = [
      'Nom',
      'Email',
      'State',
      'Actions'
    ];
    // this.title = 'Clients';
    // this.label = 'Toutes les clients';

    this.route.data.subscribe((res) => {
      this.title = res.title;
      this.label = res.label;
    });
  }

  changeState(item: Client, param) {
    console.log(param.target.value);
    this.clientsService.update(item, param.target.value);
  }

  public edit(item: any) {
    console.log(item);
    this.router.navigate(['/clients/edit', item.id]);

  }

  public delete(item: any) {
   this.clientsService.delete(item);
  }



}
