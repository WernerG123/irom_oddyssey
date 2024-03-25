import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProkJob } from 'src/app/models/JobArrival';
import { WebRequestsService } from 'src/app/services/web-requests.service';

@Component({
  selector: 'app-scope-of-work',
  templateUrl: './scope-of-work.component.html',
  styleUrls: ['./scope-of-work.component.scss']
})
export class ScopeOfWorkComponent implements OnInit {

  @Input() scopeOfWork : ProkJob = new ProkJob();
  
  constructor(private webReq: WebRequestsService, private router: Router) { }

  ngOnInit(): void {
    console.log("ID for selected Job: " + this.scopeOfWork._id)
  }

  save() {
    console.log(this.scopeOfWork._id)
    this.saveJobEntry();
  }

  close() {
    localStorage.removeItem('selectedJobID');
    this.router.navigate(['/job-list'])
  }

  saveJobEntry() {
    console.info(this.scopeOfWork)
    if(this.scopeOfWork._id == undefined || this.scopeOfWork._id == '') {
      this.webReq.createJobArrival(this.scopeOfWork).subscribe((result:any) => {
        console.log(result);
        alert('Job Entry Created')
      })
    } else {
      this.webReq.updateJobArrival(this.scopeOfWork).subscribe((result: any) => {
        console.log(result);
        alert('Job Entry Updated')
      })
    }
  }
}
