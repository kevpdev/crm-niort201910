import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { PrestationsModule } from '../../prestations.module';
import { Prestation } from 'src/app/shared/models/prestation';
import { State } from 'src/app/shared/enums/state.enum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-prestations',
  templateUrl: './page-prestations.component.html',
  styleUrls: ['./page-prestations.component.scss']
})
export class PagePrestationsComponent implements OnInit {
  public headers: string[];
  public collection: Prestation[];
  public states = State;
  public title: string;
  public label: string;
  constructor(
    private prestationsService: PrestationsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    this.headers = [
      'Type',
      'Client',
      'Nb. Jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'State'
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
    this.prestationsService.update(item, param.target.value);
  }

}
