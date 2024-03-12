import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucatarieComponent } from './bucatarie.component';

describe('BucatarieComponent', () => {
  let component: BucatarieComponent;
  let fixture: ComponentFixture<BucatarieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucatarieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucatarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
