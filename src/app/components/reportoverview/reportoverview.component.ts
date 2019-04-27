import { Component, OnInit, Input } from '@angular/core';
import { TechnicalReport } from '../../models/TechnicalReport';

@Component({
  selector: 'app-reportoverview',
  templateUrl: './reportoverview.component.html',
  styleUrls: ['./reportoverview.component.css']
})
export class ReportoverviewComponent implements OnInit {

  @Input() report: TechnicalReport;

  constructor() { }

  ngOnInit() {
  }

}
