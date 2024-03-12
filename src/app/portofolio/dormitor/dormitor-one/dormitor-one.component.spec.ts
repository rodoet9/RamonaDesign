import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorOneComponent } from './dormitor-one.component';

describe('DormitorOneComponent', () => {
  let component: DormitorOneComponent;
  let fixture: ComponentFixture<DormitorOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitorOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
