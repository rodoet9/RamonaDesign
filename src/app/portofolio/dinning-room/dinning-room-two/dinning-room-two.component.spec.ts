import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningRoomTwoComponent } from './dinning-room-two.component';

describe('DinningRoomTwoComponent', () => {
  let component: DinningRoomTwoComponent;
  let fixture: ComponentFixture<DinningRoomTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningRoomTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningRoomTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
