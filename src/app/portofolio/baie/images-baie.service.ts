import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesBaieService {
	private imagesBaieOneUrls: string[] = [
		'../../../../assets/Baie/B1/Baie1-1.jpeg',
		'../../../../assets/Baie/B1/Baie1-2.jpeg',
		'../../../../assets/Baie/B1/Baie1-3.jpeg',
	];
	private imagesBaieTwoUrls: string[] = [
		'../../../../assets/Baie/B2/Baie2-2.jpeg',
		'../../../../assets/Baie/B2/Baie2-3.jpeg',
		'../../../../assets/Baie/B2/Baie2-4.jpeg',
		'../../../../assets/Baie/B2/Baie2-5.jpeg',
		'../../../../assets/Baie/B2/Baie2-6.jpeg',
		'../../../../assets/Baie/B2/Baie2-7.jpeg',
	];
	private imagesBaieThreeUrls: string[] = [
		'../../../../assets/Baie/B3/Baie3-1.jpeg',
		'../../../../assets/Baie/B3/Baie3-2.jpeg',
		'../../../../assets/Baie/B3/Baie3-3.jpeg',
		'../../../../assets/Baie/B3/Baie3-4.jpeg',
		'../../../../assets/Baie/B3/Baie3-5.jpeg',
		'../../../../assets/Baie/B3/Baie3-6.jpeg',
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
