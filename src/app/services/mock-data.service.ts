import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  constructor() { }

  mockJobList(count:number) {
    let myList = []
    for(let i = 0; i<= count; i++) {
      let obj = {
        id: Math.floor((Math.random() * 10000)).toString(),
        customerPO: Math.floor((Math.random() * 1000000000)).toString()
      }
      myList.push(obj)
    }
    return myList;
  }
}
