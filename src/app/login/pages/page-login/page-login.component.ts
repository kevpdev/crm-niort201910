import { Component, OnInit } from "@angular/core";
import { of, BehaviorSubject, Observable, Subscription, Subject } from "rxjs";
@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.scss"]
})
export class PageLoginComponent implements OnInit {
  obs = new Observable(data => {
    data.next(Math.random());
  });
  behavior = new BehaviorSubject(Math.random());
  subject = new Subject();
  sub: Subscription;
  constructor() {}
  ngOnInit() {
    this.sub = this.obs.subscribe(data => {
      console.log(data);
    });
    this.obs.subscribe(data => {
      console.log(data);
    });
    this.behavior.subscribe(data => {
      console.log(data);
    });
    this.behavior.subscribe(data => {
      console.log(data);
    });
    this.subject.next(Math.random());
    this.subject.subscribe(data => {
      console.log(data);
    });
    this.subject.subscribe(data => {
      console.log(data);
    });
    this.subject.next(Math.random());
  }
  fn() {
    this.obs = of("data");
    this.sub.unsubscribe();
    this.obs.subscribe(data => {
      console.log(data);
    });
  }
  fn2() {
    this.behavior.next(10);
  }
  fn3() {
    this.subject.next(20);
  }
}
