import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DinningRoomService {
	private imagesDinningRoomOneUrs: string[] = [
		'../../../../assets/DinningRoom/D1/DinningRoom1-1.jpeg',
		'../../../../assets/DinningRoom/D1/DinningRoom1-2.jpeg',
		'../../../../assets/DinningRoom/D1/DinningRoom1-3.jpeg',
		'../../../../assets/DinningRoom/D1/DinningRoom1-4.jpeg',
		'../../../../assets/DinningRoom/D1/DinningRoom1-5.jpeg',
	];
	private imagesDinningRoomTwoUrs: string[] = [
		'../../../../assets/DinningRoom/D2/DinningRoom2-1.jpeg',
		'../../../../assets/DinningRoom/D2/DinningRoom2-2.jpeg',
		'../../../../assets/DinningRoom/D2/DinningRoom2-3.jpeg',
		'../../../../assets/DinningRoom/D2/DinningRoom2-4.jpeg',
	];
	private imagesDinningRoomThreeUrs: string[] = [
		'../../../../assets/DinningRoom/D3/DinningRoom3-1.jpeg',
		'../../../../assets/DinningRoom/D3/DinningRoom3-2.jpeg',
		'../../../../assets/DinningRoom/D3/DinningRoom3-3.jpeg',
	];

	constructor() {}

	getImagesDinningRoomOne(): string[] {
		return this.imagesDinningRoomOneUrs;
	}

	getImagesDinningRoomTwo(): string[] {
		return this.imagesDinningRoomTwoUrs;
	}

	getImagesDinningRoomThree(): string[] {
		return this.imagesDinningRoomThreeUrs;
	}
}
