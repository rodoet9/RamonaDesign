import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltraDetailsComponent } from './ultra-details.component';

describe('UltraDetailsComponent', () => {
  let component: UltraDetailsComponent;
  let fixture: ComponentFixture<UltraDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltraDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltraDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
