import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucatarieTwoComponent } from './bucatarie-two.component';

describe('BucatarieTwoComponent', () => {
  let component: BucatarieTwoComponent;
  let fixture: ComponentFixture<BucatarieTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucatarieTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucatarieTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
