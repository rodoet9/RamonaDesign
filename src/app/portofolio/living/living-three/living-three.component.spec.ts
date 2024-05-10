import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivingThreeComponent } from './living-three.component';

describe('LivingThreeComponent', () => {
  let component: LivingThreeComponent;
  let fixture: ComponentFixture<LivingThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivingThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivingThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
