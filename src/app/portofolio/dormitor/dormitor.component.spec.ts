import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitorComponent } from './dormitor.component';

describe('DormitorComponent', () => {
  let component: DormitorComponent;
  let fixture: ComponentFixture<DormitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DormitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DormitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
