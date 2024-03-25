import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequestsService {

  constructor(private http: HttpClient) { }

  getJobArrivals() {
    return this.http.get(environment.baseUrl+'/job');
  }
  getJobArrivalByID(dbID:string) {
    return this.http.get(environment.baseUrl+'/job/'+dbID);
  }

  createJobArrival(jobArrival:any) {
    // let reqObj = jobArrival;
    let reqObj = Object.assign({},jobArrival);
    delete reqObj._id;
    return this.http.post(environment.baseUrl + '/job', reqObj);
  }
  updateJobArrival(jobArrival:any) {
    let updateObj = Object.assign({},jobArrival);
    let idParam = updateObj._id;
    delete updateObj._id;
    return this.http.put(environment.baseUrl + '/job/' + idParam, updateObj);
  }
  deleteJobArrival(jobArrival:any) {
    let idParam = jobArrival._id;
    delete jobArrival._id;
    return this.http.delete(environment.baseUrl + '/job/' + idParam, jobArrival);
  }
}
