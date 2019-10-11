import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';
import { Client } from 'src/app/shared/models/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss']
})
export class PageEditClientComponent implements OnInit {
  public item$: Observable<Client>;
  public title: string;
  public label: string;
  public id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsService: ClientsService
  ) { }

  ngOnInit() {

    this.route.data.subscribe((res) => {
      this.title = res.title;
      this.label = res.label;
    });

    // get id in activatedRoute
    this.route.params.subscribe((data) => {
      console.log(data.id);
      this.item$ = this.clientsService.getClient(data.id);

    });

    this.item$ = this.route.params.pipe(
      // unsubscribe automatique
      switchMap((data) => {
        this.id = data.id;
        return this.clientsService.getClient(data.id);
      })
    );
  }

  public edit(item: any) {
    item.id = this.id;
    console.log(item);
    this.clientsService.update(item).then((res) => {
      this.router.navigate(['clients']);
    });
  }

}
