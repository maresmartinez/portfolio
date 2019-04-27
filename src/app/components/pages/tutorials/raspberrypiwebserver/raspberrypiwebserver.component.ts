import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raspberrypiwebserver',
  templateUrl: './raspberrypiwebserver.component.html',
  styleUrls: ['./raspberrypiwebserver.component.css']
})
export class RaspberrypiwebserverComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

}
