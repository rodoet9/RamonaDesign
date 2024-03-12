import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirouOneComponent } from './birou-one.component';

describe('BirouOneComponent', () => {
  let component: BirouOneComponent;
  let fixture: ComponentFixture<BirouOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirouOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirouOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
