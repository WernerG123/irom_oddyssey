import { Component, OnInit } from '@angular/core';
import { ProkJob } from 'src/app/models/JobArrival';

@Component({
  selector: 'app-job-arrival',
  templateUrl: './job-arrival.component.html',
  styleUrls: ['./job-arrival.component.scss']
})
export class JobArrivalComponent implements OnInit {

  jobObject: ProkJob = new ProkJob();

  jobReady = false;
  constructor() { }

  ngOnInit(): void {
  }

}
