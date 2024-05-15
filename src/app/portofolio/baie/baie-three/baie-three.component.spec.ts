import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieThreeComponent } from './baie-three.component';

describe('BaieThreeComponent', () => {
  let component: BaieThreeComponent;
  let fixture: ComponentFixture<BaieThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaieThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaieThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
