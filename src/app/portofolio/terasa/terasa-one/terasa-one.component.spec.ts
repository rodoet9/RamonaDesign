import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerasaOneComponent } from './terasa-one.component';

describe('TerasaOneComponent', () => {
  let component: TerasaOneComponent;
  let fixture: ComponentFixture<TerasaOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerasaOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerasaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
