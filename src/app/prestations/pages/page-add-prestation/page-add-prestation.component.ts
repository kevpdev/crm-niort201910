import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from 'src/app/shared/models/prestation';

@Component({
  selector: 'app-page-add-prestation',
  templateUrl: './page-add-prestation.component.html',
  styleUrls: ['./page-add-prestation.component.scss']
})
export class PageAddPrestationComponent implements OnInit {
  public title: string;
  public label: string;
  constructor(
    private prestationsService: PrestationsService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.data.subscribe((res) => {
      this.title = res.title;
      this.label = res.label;
    });
  }

  public add(item: any) {
    // console.log(item);
    this.prestationsService.add(item).then((res) =>{
      // using router
      this.router.navigate(['/prestations']);
      // relative route using Router and activatedRoute
      // this.router.navigate(['../'], {relativeTo: this.route});
    });
    // this.prestationsService.add(item).subscribe((res) =>{
    //   // using router
    //   this.router.navigate(['/prestations']);
  }

}
