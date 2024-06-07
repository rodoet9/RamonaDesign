import { Component } from '@angular/core';
import { DinningRoomService } from '../dinning-room.service';

@Component({
	selector: 'app-dinning-room-two',
	templateUrl: './dinning-room-two.component.html',
	styleUrls: ['./dinning-room-two.component.scss'],
})
export class DinningRoomTwoComponent {
	public imgDinningRoomTwoUrls: string[] = [];

	constructor(private dinningRoomService: DinningRoomService) {}

	ngOnInit(): void {
		this.imgDinningRoomTwoUrls = this.dinningRoomService.getImagesDinningRoomTwo();
	}
}
