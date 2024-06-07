import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesBaieService {
	private imagesBaiePortofoliuUrl: string[] = ['https://rdesign.twic.pics/baie/BaiePortofoliu.png'];

	private imagesBaieOneUrls: string[] = [
		'https://rdesign.twic.pics/baie/B1/Baie1-1.jpeg',
		'https://rdesign.twic.pics/baie/B1/Baie1-2.jpeg',
		'https://rdesign.twic.pics/baie/B1/Baie1-3.jpeg',
	];
	private imagesBaieTwoUrls: string[] = [
		'https://rdesign.twic.pics/baie/B2/Baie2-2.jpeg',
		'https://rdesign.twic.pics/baie/B2/Baie2-3.jpeg',
		'https://rdesign.twic.pics/baie/B2/Baie2-4.jpeg',
		'https://rdesign.twic.pics/baie/B2/Baie2-5.jpeg',
		'https://rdesign.twic.pics/baie/B2/Baie2-6.jpeg',
		'https://rdesign.twic.pics/baie/B2/Baie2-7.jpeg',
	];
	private imagesBaieThreeUrls: string[] = [
		'https://rdesign.twic.pics/baie/B3/Baie3-1.jpeg',
		'https://rdesign.twic.pics/baie/B3/Baie3-2.jpeg',
		'https://rdesign.twic.pics/baie/B3/Baie3-3.jpeg',
		'https://rdesign.twic.pics/baie/B3/Baie3-4.jpeg',
		'https://rdesign.twic.pics/baie/B3/Baie3-5.jpeg',
		'https://rdesign.twic.pics/baie/B3/Baie3-6.jpeg',
	];

	constructor() {}

	getImagesBaieOne(): string[] {
		return this.imagesBaieOneUrls;
	}

	getImagesBaieTwo(): string[] {
		return this.imagesBaieTwoUrls;
	}

	getImagesBaieThree(): string[] {
		return this.imagesBaieThreeUrls;
	}
}
