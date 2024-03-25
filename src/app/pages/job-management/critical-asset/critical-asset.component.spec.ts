import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticalAssetComponent } from './critical-asset.component';

describe('CriticalAssetComponent', () => {
  let component: CriticalAssetComponent;
  let fixture: ComponentFixture<CriticalAssetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticalAssetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriticalAssetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
