import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesBirouService {
	private imagesBirouOneUrls: string[] = [
		'../../../../assets/Birou/B1/Birou1-1.jpeg',
		'../../../../assets/Birou/B1/Birou1-2.jpeg',
		'../../../../assets/Birou/B1/Birou1-3.jpeg',
		'../../../../assets/Birou/B1/Birou1-4.jpeg',
		'../../../../assets/Birou/B1/Birou1-5.jpeg',
	];
	private imagesBirouTwoUrls: string[] = [
		'../../../../assets/Birou/B2/Birou2-1.jpeg',
		'../../../../assets/Birou/B2/Birou2-2.jpeg',
		'../../../../assets/Birou/B2/Birou2-3.jpeg',
		'../../../../assets/Birou/B2/Birou2-4.jpeg',
		'../../../../assets/Birou/B2/Birou2-5.jpeg',
		'../../../../assets/Birou/B2/Birou2-6.jpeg',
		'../../../../assets/Birou/B2/Birou2-7.jpeg',
	];
	private imagesBirouThreeUrls: string[] = [
		'../../../../assets/Birou/B3/Birou3-1.jpg',
		'../../../../assets/Birou/B3/Birou3-2.jpg',
		'../../../../assets/Birou/B3/Birou3-3.jpg',
		'../../../../assets/Birou/B3/Birou3-4.jpg',
		'../../../../assets/Birou/B3/Birou3-5.jpg',
		'../../../../assets/Birou/B3/Birou3-6.jpg',
		'../../../../assets/Birou/B3/Birou3-7.jpg',
		'../../../../assets/Birou/B3/Birou3-8.jpg',
		'../../../../assets/Birou/B3/Birou3-9.jpg',
		'../../../../assets/Birou/B3/Birou3-10.jpg',
		'../../../../assets/Birou/B3/Birou3-11.jpg',
		'../../../../assets/Birou/B3/Birou3-12.jpg',
		'../../../../assets/Birou/B3/Birou3-13.jpg',
		'../../../../assets/Birou/B3/Birou3-14.jpg',
	];

	constructor() {}

	getImagesBirouOne(): string[] {
		return this.imagesBirouOneUrls;
	}

	getImagesBirouTwo(): string[] {
		return this.imagesBirouTwoUrls;
	}

	getImagesBirouThree(): string[] {
		return this.imagesBirouThreeUrls;
	}
}
