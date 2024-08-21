import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesDormitorService {
	private imagesDormitorOneUrls: string[] = [
		'../../../../assets/Dormitor/D1/Dormitor1-1.jpeg',
		'../../../../assets/Dormitor/D1/Dormitor1-2.jpeg',
		'../../../../assets/Dormitor/D1/Dormitor1-3.jpeg',
		'../../../../assets/Dormitor/D1/Dormitor1-4.jpeg',
	];
	private imagesDormitorTwoUrls: string[] = [
		'../../../../assets/Dormitor/D2/Dormitor2-1.jpeg',
		'../../../../assets/Dormitor/D2/Dormitor2-2.jpeg',
		'../../../../assets/Dormitor/D2/Dormitor2-4.jpeg',
		'../../../../assets/Dormitor/D2/Dormitor2-5.jpeg',
	];
	private imagesDormitorThreeUrls: string[] = [
		'../../../../assets/Dormitor/D3/Dormitor3-1.jpeg',
		'../../../../assets/Dormitor/D3/Dormitor3-2.jpeg',
		'../../../../assets/Dormitor/D3/Dormitor3-3.jpeg',
		'../../../../assets/Dormitor/D3/Dormitor3-4.jpeg',
		'../../../../assets/Dormitor/D3/Dormitor3-5.jpeg',
	];
	private imagesDormitorFourUrls: string[] = [
		'../../../../assets/Dormitor/D4/Dormitor4-1.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-2.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-3.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-4.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-5.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-6.jpeg',
		'../../../../assets/Dormitor/D4/Dormitor4-7.jpeg',
	];

	constructor() {}

	getImagesDormitorOne(): string[] {
		return this.imagesDormitorOneUrls;
	}

	getImagesDormitorTwo(): string[] {
		return this.imagesDormitorTwoUrls;
	}

	getImagesDormitorThree(): string[] {
		return this.imagesDormitorThreeUrls;
	}

	getImagesDormitorFour(): string[] {
		return this.imagesDormitorFourUrls;
	}
}
