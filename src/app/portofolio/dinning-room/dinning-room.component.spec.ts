import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningRoomComponent } from './dinning-room.component';

describe('DinningRoomComponent', () => {
  let component: DinningRoomComponent;
  let fixture: ComponentFixture<DinningRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
