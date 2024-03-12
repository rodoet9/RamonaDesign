import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinningRoomOneComponent } from './dinning-room-one.component';

describe('DinningRoomOneComponent', () => {
  let component: DinningRoomOneComponent;
  let fixture: ComponentFixture<DinningRoomOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DinningRoomOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DinningRoomOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
