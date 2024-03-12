import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorTwoComponent } from './dormitor-two.component';

describe('DormitorTwoComponent', () => {
  let component: DormitorTwoComponent;
  let fixture: ComponentFixture<DormitorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitorTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
