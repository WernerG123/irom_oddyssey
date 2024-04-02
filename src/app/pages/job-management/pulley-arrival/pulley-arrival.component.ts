import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProkJob } from 'src/app/models/JobArrival';
import { WebRequestsService } from 'src/app/services/web-requests.service';

@Component({
  selector: 'app-pulley-arrival',
  templateUrl: './pulley-arrival.component.html',
  styleUrls: ['./pulley-arrival.component.scss']
})
export class PulleyArrivalComponent implements OnInit {
  @Input() jobItem: ProkJob = new ProkJob();

  imageUrl1: any = null;
  imageUrl2: any = null;
  imageUrl3: any = null;
  imageUrl4: any = null;
  capturing = false;
  capturingID = 1;
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl1 = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  constructor(private webReq: WebRequestsService, private router: Router) { }

  ngOnInit(): void {
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

  saveImg(img:any) {
    console.log("Image saved...")
    return img;
  }

  setImage(evt:any, selection: any) {
    console.log(evt)
    console.log(selection)
    selection = this.capturingID;
    switch(selection) {
      case 1: this.imageUrl1 = evt._imageAsDataUrl;
      break;
      case 2: this.imageUrl2 = evt._imageAsDataUrl;
      break;
      case 3: this.imageUrl3 = evt._imageAsDataUrl;
      break;
      case 4: this.imageUrl4 = evt._imageAsDataUrl;
      break;
      default: break;
    }
    // console.log(evt)
    // this.imageUrl1 = evt._imageAsDataUrl;
  }
}
