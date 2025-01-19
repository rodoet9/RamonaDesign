import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirouThreeComponent } from './birou-three.component';

describe('BirouThreeComponent', () => {
  let component: BirouThreeComponent;
  let fixture: ComponentFixture<BirouThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirouThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirouThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
