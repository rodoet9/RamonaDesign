import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class ImagesBucatarieService {
	private imagesBucatarieOneUrls: string[] = [
		'../../../../assets/Bucatarie/B1/Bucatarie1-1.jpeg',
		'../../../../assets/Bucatarie/B1/Bucatarie1-2.jpeg',
		'../../../../assets/Bucatarie/B1/Bucatarie1-3.jpeg',
		'../../../../assets/Bucatarie/B1/Bucatarie1-5.jpeg',
	];

	private imagesBucatarieTwoUrls: string[] = [
		'../../../../assets/Bucatarie/B2/Bucatarie2-1.jpeg',
		'../../../../assets/Bucatarie/B2/Bucatarie2-2.jpeg',
	];

	private imagesBucatarieThreeUrls: string[] = [
		'../../../../assets/Bucatarie/B3/Bucatarie3-1.jpeg',
		'../../../../assets/Bucatarie/B3/Bucatarie3-2.jpeg',
		'../../../../assets/Bucatarie/B3/Bucatarie3-3.jpeg',
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
