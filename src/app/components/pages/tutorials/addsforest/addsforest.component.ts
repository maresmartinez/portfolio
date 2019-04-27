import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsforest',
  templateUrl: './addsforest.component.html',
  styleUrls: ['./addsforest.component.css']
})
export class AddsforestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
