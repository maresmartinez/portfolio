import { Component, OnInit, Input } from '@angular/core';
import { ProjectDetails } from 'src/app/models/ProjectDetails';

@Component({
  selector: 'app-projectoverview',
  templateUrl: './projectoverview.component.html',
  styleUrls: ['./projectoverview.component.css']
})
export class ProjectoverviewComponent implements OnInit {

  @Input() projectoverview: ProjectDetails;

  constructor() { }

  ngOnInit() {
  }

}
