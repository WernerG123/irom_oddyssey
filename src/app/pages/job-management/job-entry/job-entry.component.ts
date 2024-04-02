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
  customerDrawing : any = null;
  customerPOFile: any = null;
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

  onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    // Add styles to indicate drag over
    event.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  onDragEnter(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Add styles to indicate drag enter
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Remove styles to indicate drag leave
  }

  onDrop(event: any, _type:any) {
    event.preventDefault();
    event.stopPropagation();
    // Remove styles to indicate drop
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.handleFiles(files, _type == 'PO' ? 'PO' : 'DRAWING');
    }
  }

  handleFiles(files: FileList, _type:any) {
    // Handle the files here (e.g., upload to server, process locally)
    console.log(files);
    if(_type == 'PO'){
      this.customerPOFile = files
    } else {
      this.customerDrawing = files
    }
  }

  onSelectFiles(event: any, _type:any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.handleFiles(files, _type);
    }
  }

}
