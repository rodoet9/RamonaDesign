import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class DinningRoomService {
	private imagesDinningRoomOneUrs: string[] = [
		'https://rdesign.twic.pics/dinningroom/D1/DinningRoom1-1.jpeg',
		'https://rdesign.twic.pics/dinningroom/D1/DinningRoom1-2.jpeg',
		'https://rdesign.twic.pics/dinningroom/D1/DinningRoom1-3.jpeg',
		'https://rdesign.twic.pics/dinningroom/D1/DinningRoom1-4.jpeg',
		'https://rdesign.twic.pics/dinningroom/D1/DinningRoom1-5.jpeg',
	];
	private imagesDinningRoomTwoUrs: string[] = [
		'https://rdesign.twic.pics/dinningroom/D2/DinningRoom2-1.jpeg',
		'https://rdesign.twic.pics/dinningroom/D2/DinningRoom2-2.jpeg',
		'https://rdesign.twic.pics/dinningroom/D2/DinningRoom2-3.jpeg',
		'https://rdesign.twic.pics/dinningroom/D2/DinningRoom2-4.jpeg',
	];
	private imagesDinningRoomThreeUrs: string[] = [
		'https://rdesign.twic.pics/dinningroom/D3/DinningRoom3-1.jpeg',
		'https://rdesign.twic.pics/dinningroom/D3/DinningRoom3-2.jpeg',
		'https://rdesign.twic.pics/dinningroom/D3/DinningRoom3-3.jpeg',
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
