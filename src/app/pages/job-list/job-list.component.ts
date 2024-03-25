import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MockDataService } from 'src/app/services/mock-data.service';
import { WebRequestsService } from 'src/app/services/web-requests.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'customerPO', 'customer', 'customerSite','arrivalDate', 'workshop']
  jobArrivals: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(public router: Router, private mock: MockDataService, private webReq: WebRequestsService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.mockData();
    this.getAllJobs();

  }
  createNewJob() {
    localStorage['selectedJobID'] = '';
    this.router.navigate(['/job-management'])
  }

  mockData() {
    this.dataSource.data = this.mock.mockJobList(50);
    this.dataSource.paginator = this.paginator;
  }

  setSelectedJobItem(jobItem:any) {
    localStorage.setItem('selectedJobID', jobItem._id)
    this.router.navigate(['/job-management'])

  }

  getAllJobs() {
    this.webReq.getJobArrivals().subscribe(result => {
      console.log(result);
      this.jobArrivals = result;
      this.dataSource.data = this.jobArrivals;
    })
  }

}
