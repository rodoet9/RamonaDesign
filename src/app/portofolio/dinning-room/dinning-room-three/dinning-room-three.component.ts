import { Component, OnInit } from '@angular/core';
import { DinningRoomService } from '../dinning-room.service';

@Component({
	selector: 'app-dinning-room-three',
	templateUrl: './dinning-room-three.component.html',
	styleUrls: ['./dinning-room-three.component.scss'],
})
export class DinningRoomThreeComponent implements OnInit {
	public imgDinningRoomThreeUrls: string[] = [];

	constructor(private dinningRoomService: DinningRoomService) {}

	ngOnInit(): void {
		this.imgDinningRoomThreeUrls = this.dinningRoomService.getImagesDinningRoomThree();
	}
}
