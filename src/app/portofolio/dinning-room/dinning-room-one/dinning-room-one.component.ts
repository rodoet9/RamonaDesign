import { Component, OnInit } from '@angular/core';
import { DinningRoomService } from '../dinning-room.service';

@Component({
	selector: 'app-dinning-room-one',
	templateUrl: './dinning-room-one.component.html',
	styleUrls: ['./dinning-room-one.component.scss'],
})
export class DinningRoomOneComponent implements OnInit {
	public imgDinningRoomOneUrls: string[] = [];

	constructor(private dinningRoomService: DinningRoomService) {}

	ngOnInit(): void {
		this.imgDinningRoomOneUrls = this.dinningRoomService.getImagesDinningRoomOne();
	}
}
