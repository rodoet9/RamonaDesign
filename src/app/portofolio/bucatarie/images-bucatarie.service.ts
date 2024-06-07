import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesBucatarieService {
	private imagesBucatarieOneUrls: string[] = [
		'https://rdesign.twic.pics/bucatarie/B1/Bucatarie1-1.jpeg',
		'https://rdesign.twic.pics/bucatarie/B1/Bucatarie1-2.jpeg',
		'https://rdesign.twic.pics/bucatarie/B1/Bucatarie1-3.jpeg',
		'https://rdesign.twic.pics/bucatarie/B1/Bucatarie1-5.jpeg',
	];

	private imagesBucatarieTwoUrls: string[] = [
		'https://rdesign.twic.pics/bucatarie/B2/Bucatarie2-1.jpeg',
		'https://rdesign.twic.pics/bucatarie/B2/Bucatarie2-2.jpeg',
	];

	private imagesBucatarieThreeUrls: string[] = [
		'https://rdesign.twic.pics/bucatarie/B3/Bucatarie3-1.jpeg',
		'https://rdesign.twic.pics/bucatarie/B3/Bucatarie3-2.jpeg',
		'https://rdesign.twic.pics/bucatarie/B3/Bucatarie3-3.jpeg',
	];
	constructor() {}

	getImagesBucatarieOne(): string[] {
		return this.imagesBucatarieOneUrls;
	}

	getImagesBucatarieTwo(): string[] {
		return this.imagesBucatarieTwoUrls;
	}

	getImagesBucatarieThree(): string[] {
		return this.imagesBucatarieThreeUrls;
	}
}
