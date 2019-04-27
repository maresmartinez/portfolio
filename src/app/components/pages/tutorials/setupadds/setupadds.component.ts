import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setupadds',
  templateUrl: './setupadds.component.html',
  styleUrls: ['./setupadds.component.css']
})
export class SetupaddsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
