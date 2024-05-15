import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningRoomThreeComponent } from './dinning-room-three.component';

describe('DinningRoomThreeComponent', () => {
  let component: DinningRoomThreeComponent;
  let fixture: ComponentFixture<DinningRoomThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningRoomThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningRoomThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
