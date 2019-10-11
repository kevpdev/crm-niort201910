import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title: string;
  public version$: BehaviorSubject<number>;
  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit() {
    this.title = 'My App';
    this.version$ = this.versionService.version$;
  }


}
