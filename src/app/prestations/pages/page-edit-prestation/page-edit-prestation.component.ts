import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public item$: Observable<Prestation>;
  public title: string;
  public label: string;
  public id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private prestationsService: PrestationsService
  ) { }

  ngOnInit() {

    this.route.data.subscribe((res) => {
      this.title = res.title;
      this.label = res.label;
    });

    // get id in activatedRoute
    this.route.params.subscribe((data) => {
      console.log(data.id);
      this.item$ = this.prestationsService.getPrestation(data.id);

    });

    this.item$ = this.route.params.pipe(
      // unsubscribe automatique
      switchMap((data) => {
        this.id = data.id;
        return this.prestationsService.getPrestation(data.id);
      })
    );
  }

  public edit(item: any) {
    item.id = this.id;
    console.log(item);
    this.prestationsService.update(item).then((res) => {
      this.router.navigate(['prestations']);
    });
  }

}
