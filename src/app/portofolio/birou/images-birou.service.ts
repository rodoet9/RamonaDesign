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

	constructor() {}

	getImagesBirouOne(): string[] {
		return this.imagesBirouOneUrls;
	}

	getImagesBirouTwo(): string[] {
		return this.imagesBirouTwoUrls;
	}
}
