import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingTwoComponent } from './living-two.component';

describe('LivingTwoComponent', () => {
  let component: LivingTwoComponent;
  let fixture: ComponentFixture<LivingTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
