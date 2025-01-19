import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieFourComponent } from './baie-four.component';

describe('BaieFourComponent', () => {
  let component: BaieFourComponent;
  let fixture: ComponentFixture<BaieFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaieFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaieFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
