import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ProkJob } from '../../../models/JobArrival';
import { ObjectId } from 'mongodb';
import { WebRequestsService } from 'src/app/services/web-requests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-entry',
  templateUrl: './job-entry.component.html',
  styleUrls: ['./job-entry.component.scss']
})
export class JobEntryComponent implements OnInit, AfterViewInit {

  @Input() jobItem: ProkJob = new ProkJob();
  isDeleting = false;
  // @Input() IjobItem?: JobArrivalObj;

  constructor(private webReq: WebRequestsService, private router: Router) { }

  ngAfterViewInit(): void {
    console.log("ID for selected Job: " + this.jobItem._id)
    
  }
  ngOnInit(): void {

    // if (this.jobItem._id == undefined || this.jobItem.customerJobInfo?.projectNo == null) {
    //   this.jobItem = new ProkJob()
    // }
    // this.jobItem._id = localStorage.getItem('selectedJobID') == undefined ? '' : localStorage.getItem('selectedJobID')!.toString();
    // if(this.jobItem._id != '' && this.jobItem._id != undefined) {
    //   this.getJobItemByID(this.jobItem._id);
    // }
  }

  saveJobEntry() {
    console.info(this.jobItem._id)
    if(this.jobItem._id == undefined || this.jobItem._id == '') {
      this.webReq.createJobArrival(this.jobItem).subscribe((result:any) => {
        console.log(result);
        alert('Job Entry Created')
      })
    } else {
      this.webReq.updateJobArrival(this.jobItem).subscribe((result: any) => {
        console.log(result);
        alert('Job Entry Updated')
      })
    }
  }

  getJobItemByID(id:any) {
      this.webReq.getJobArrivalByID(localStorage.getItem('selectedJobID')!).subscribe((result:any) => {
        this.jobItem = result
        // this.jobItem.customerInfo.arrivalDate = new Date(result.customerInfo.arrivalDate);
      })
  }

  close() {
    localStorage.removeItem('selectedJobID');
    this.router.navigate(['/job-list'])
  }

  deleteJob() {
    this.webReq.deleteJobArrival(this.jobItem).subscribe((result:any) => {
      console.log(result);
      this.isDeleting = false;
      this.router.navigate(['/job-list'])
    }, err => {
      console.warn(err)
    })
  }

}
