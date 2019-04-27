import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usingwds',
  templateUrl: './usingwds.component.html',
  styleUrls: ['./usingwds.component.css']
})
export class UsingwdsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
