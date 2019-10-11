import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { PrestationsModule } from '../../prestations.module';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit, OnDestroy {
  public headers: string[];
  public collection$: Observable<Prestation[]>;
  // public collection: Prestation[];
  public states = State;
  public title: string;
  public label: string;
  // private sub: Subscription;

  constructor(
    private prestationsService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.collection$ = this.prestationsService.collection;
    // this.sub = this.prestationsService.collection.subscribe((data) => {
    //   this.collection = data;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State',
      'Actions'
    ];
    // this.title = 'Prestations';
    // this.label = 'Toutes les prestations';

    this.route.data.subscribe((res) => {
      this.title = res.title;
      this.label = res.label;
    });
  }

  changeState(item: Prestation, param) {
    console.log(param.target.value);
    this.prestationsService.update(item, param.target.value).then((res) => {
      // res étant la réponse de l'api
      item.state = param.target.value;
    });
    // this.prestationsService.update(item).subscribe((res) => {
    //   // res étant la réponse de l'api
    //   item.state = param.target.value;
    // });
  }

  public edit(item: any) {
    console.log(item);
    this.router.navigate(['/prestations/edit', item.id]);

  }

  public delete(item: any) {
   this.prestationsService.delete(item);
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
