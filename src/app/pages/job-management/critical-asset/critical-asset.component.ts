import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProkJob } from 'src/app/models/JobArrival';
import { WebRequestsService } from 'src/app/services/web-requests.service';
// import { CriticalAssetDetails } from 'src/app/models/JobArrival';

@Component({
  selector: 'app-critical-asset',
  templateUrl: './critical-asset.component.html',
  styleUrls: ['./critical-asset.component.scss']
})
export class CriticalAssetComponent implements OnInit {

  // criticalAsset: CriticalAssetDetails = new CriticalAssetDetails();
  // criticalAsset: ProkJob = new ProkJob();
  @Input() criticalAsset: ProkJob = new ProkJob();
  constructor(private webReq: WebRequestsService, private router: Router) { }

  ngOnInit(): void {
    console.log("ID for selected Job: " + this.criticalAsset._id)

  }

  save() {
    console.log(this.criticalAsset._id)
    this.saveJobEntry();
  }

  close() {
    localStorage.removeItem('selectedJobID');
    this.router.navigate(['/job-list'])
  }

  saveJobEntry() {
    console.info(this.criticalAsset)
    if(this.criticalAsset._id == undefined || this.criticalAsset._id == '') {
      this.webReq.createJobArrival(this.criticalAsset).subscribe((result:any) => {
        console.log(result);
        alert('Job Entry Created')
      })
    } else {
      this.webReq.updateJobArrival(this.criticalAsset).subscribe((result: any) => {
        console.log(result);
        alert('Job Entry Updated')
      })
    }
  }
}
