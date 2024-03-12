import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucatarieOneComponent } from './bucatarie-one.component';

describe('BucatarieOneComponent', () => {
  let component: BucatarieOneComponent;
  let fixture: ComponentFixture<BucatarieOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucatarieOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucatarieOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
