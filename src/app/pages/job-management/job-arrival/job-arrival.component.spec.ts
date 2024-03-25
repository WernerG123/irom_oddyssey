import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobArrivalComponent } from './job-arrival.component';

describe('JobArrivalComponent', () => {
  let component: JobArrivalComponent;
  let fixture: ComponentFixture<JobArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobArrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
