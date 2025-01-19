import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucatarieFourComponent } from './bucatarie-four.component';

describe('BucatarieFourComponent', () => {
  let component: BucatarieFourComponent;
  let fixture: ComponentFixture<BucatarieFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BucatarieFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BucatarieFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
