import { Component, OnInit } from '@angular/core';
import { ProkJob } from 'src/app/models/JobArrival';
import { WebRequestsService } from 'src/app/services/web-requests.service';

@Component({
  selector: 'app-job-management',
  templateUrl: './job-management.component.html',
  styleUrls: ['./job-management.component.scss']
})
export class JobManagementComponent implements OnInit {

  selectedJobId = localStorage.getItem('selectedJobID') == undefined ? '' : localStorage.getItem('selectedJobID');

  // selectedJobObj: ProkJob = new ProkJob();
  selectedJobObj: any;

  jobLoaded = false;

  constructor(private webReq: WebRequestsService) { }

  ngOnInit() {
    this.getSelectedJobItem();
  }

  async getSelectedJobItem() {
    let dbID ='';
    
    if(localStorage.getItem('selectedJobID') == undefined) {
      dbID = '';
    } else {
      dbID = localStorage.getItem('selectedJobID')!;
    }

    if(dbID != '') {
      // console.log("dbID is not ''")
      this.webReq.getJobArrivalByID(dbID).subscribe((result:any) => {
        this.selectedJobObj = result;
        this.jobLoaded = true;
    console.log(this.selectedJobObj)

        return result
      });
    } else {
      this.selectedJobObj = new ProkJob();
      this.jobLoaded = true;
      console.log(this.selectedJobObj)

      return this.selectedJobObj;
    }
  }

  getAllJobs() {
    this.webReq.getJobArrivals().subscribe(result => {
      // this.
    })
  }
}
