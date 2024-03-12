import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerasaComponent } from './terasa.component';

describe('TerasaComponent', () => {
  let component: TerasaComponent;
  let fixture: ComponentFixture<TerasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
