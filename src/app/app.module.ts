import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { JobManagementComponent } from './pages/job-management/job-management.component';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
// import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { JobEntryComponent } from './pages/job-management/job-entry/job-entry.component';
import { JobArrivalComponent } from './pages/job-management/job-arrival/job-arrival.component';
import { JobListComponent } from './pages/job-list/job-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatStepperModule} from '@angular/material/stepper';
import { CriticalAssetComponent } from './pages/job-management/critical-asset/critical-asset.component';
import { ScopeOfWorkComponent } from './pages/job-management/scope-of-work/scope-of-work.component';
import { PulleyArrivalComponent } from './pages/job-management/pulley-arrival/pulley-arrival.component';
import { WebcamModule } from 'ngx-webcam';
import { CustomCameraComponent } from './components/custom-camera/custom-camera.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    HomeComponent,
    JobManagementComponent,
    JobEntryComponent,
    JobArrivalComponent,
    JobListComponent,
    CriticalAssetComponent,
    ScopeOfWorkComponent,
    PulleyArrivalComponent,
    CustomCameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatBadgeModule,
    // MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    MatStepperModule,
    WebcamModule
    // FlexModule,
    // FlexLayoutModule

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
