import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingFourComponent } from './living-four.component';

describe('LivingFourComponent', () => {
  let component: LivingFourComponent;
  let fixture: ComponentFixture<LivingFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
