import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorThreeComponent } from './dormitor-three.component';

describe('DormitorThreeComponent', () => {
  let component: DormitorThreeComponent;
  let fixture: ComponentFixture<DormitorThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitorThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
