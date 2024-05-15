import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorFourComponent } from './dormitor-four.component';

describe('DormitorFourComponent', () => {
  let component: DormitorFourComponent;
  let fixture: ComponentFixture<DormitorFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitorFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitorFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
