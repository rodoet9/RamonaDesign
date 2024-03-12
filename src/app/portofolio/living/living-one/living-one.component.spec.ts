import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingOneComponent } from './living-one.component';

describe('LivingOneComponent', () => {
  let component: LivingOneComponent;
  let fixture: ComponentFixture<LivingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
