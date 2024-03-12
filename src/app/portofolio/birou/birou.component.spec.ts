import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirouComponent } from './birou.component';

describe('BirouComponent', () => {
  let component: BirouComponent;
  let fixture: ComponentFixture<BirouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
