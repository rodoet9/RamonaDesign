import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaieTwoComponent } from './baie-two.component';

describe('BaieTwoComponent', () => {
  let component: BaieTwoComponent;
  let fixture: ComponentFixture<BaieTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaieTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaieTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
