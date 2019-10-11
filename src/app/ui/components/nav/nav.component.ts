import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit() {
    console.log(this.versionService.version$.value);
  }

  public upgrade() {
    console.log(this.versionService.version$.value);
    const lastValue = this.versionService.version$.value;
    this.versionService.version$.next(lastValue + 1);
  }

}
