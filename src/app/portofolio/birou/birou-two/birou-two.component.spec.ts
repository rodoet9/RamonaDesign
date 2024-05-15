import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirouTwoComponent } from './birou-two.component';

describe('BirouTwoComponent', () => {
  let component: BirouTwoComponent;
  let fixture: ComponentFixture<BirouTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirouTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirouTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
