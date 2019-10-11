import { Component, OnInit } from '@angular/core';
import { VersionService } from '../../version.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public version$: BehaviorSubject<number>;
  constructor(
    private versionService: VersionService
  ) { }

  ngOnInit() {
    this.version$ = this.versionService.version$;
  }

}
