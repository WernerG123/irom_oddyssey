import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulleyArrivalComponent } from './pulley-arrival.component';

describe('PulleyArrivalComponent', () => {
  let component: PulleyArrivalComponent;
  let fixture: ComponentFixture<PulleyArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulleyArrivalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulleyArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
