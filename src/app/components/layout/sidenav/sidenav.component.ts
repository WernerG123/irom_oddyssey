import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  navToHome() {
    this.router.navigate(['/'])
  }

  navToJobManagement() {
    this.router.navigate(['/job-list'])
  }

  navToEmail() {

  }

  navToLogin() {
    this.router.navigate(['/login'])
  }

  navToNotifications() {

  }

  navToJobBoard() {

  }

}
