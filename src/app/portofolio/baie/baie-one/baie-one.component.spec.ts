import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieOneComponent } from './baie-one.component';

describe('BaieOneComponent', () => {
  let component: BaieOneComponent;
  let fixture: ComponentFixture<BaieOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaieOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaieOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
