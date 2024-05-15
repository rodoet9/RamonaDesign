import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucatarieThreeComponent } from './bucatarie-three.component';

describe('BucatarieThreeComponent', () => {
  let component: BucatarieThreeComponent;
  let fixture: ComponentFixture<BucatarieThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucatarieThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucatarieThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
