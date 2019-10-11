import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss']
})
export class PageAddClientComponent implements OnInit {

  public title: string;
  public label: string;
  constructor(
    private clientService: ClientsService,
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
    console.log(item);
    this.clientService.add(item).then((res) =>{
      // using router
      this.router.navigate(['/clients']);
       // relative route using Router and activatedRoute
    //   this.router.navigate(['../'], {relativeTo: this.route});
    });
    // this.prestationsService.add(item).subscribe((res) =>{
    //   // using router
   // this.router.navigate(['/clients']);
  }

}
