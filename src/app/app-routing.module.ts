import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { JobManagementComponent } from './pages/job-management/job-management.component';
import { JobListComponent } from './pages/job-list/job-list.component';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'job-management',
        component: JobManagementComponent
      },
      {
        path: 'job-list',
        component: JobListComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
