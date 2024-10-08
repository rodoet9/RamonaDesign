import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class LivingService {
	private imagesLivingOneUrls: string[] = [
		'../../../../assets/Living/L1/Living1-1.jpeg',
		'../../../../assets/Living/L1/Living1-2.jpeg',
		'../../../../assets/Living/L1/Living1-3.jpeg',
		'../../../../assets/Living/L1/Living1-4.jpeg',
		'../../../../assets/Living/L1/Living1-5.jpeg',
		'../../../../assets/Living/L1/Living1-6.jpeg',
		'../../../../assets/Living/L1/Living1-7.jpeg',
		'../../../../assets/Living/L1/Living1-8.jpeg',
		'../../../../assets/Living/L1/Living1-9.jpeg',
	];

	private imagesLivingTwoUrls: string[] = [
		'../../../../assets/Living/L2/Living2-1.jpeg',
		'../../../../assets/Living/L2/Living2-2.jpeg',
		'../../../../assets/Living/L2/Living2-3.jpeg',
	];

	private splitImagesLivingThreeUrls: string[] = [
		'../../../../assets/Living/L3/Living3-2.jpeg',
		'../../../../assets/Living/L3/Living3-6.jpeg',
		'../../../../assets/Living/L3/Living3-8.jpeg',
		'../../../../assets/Living/L3/Living3-9.jpeg',
		'../../../../assets/Living/L3/Living3-10.jpeg',
		'../../../../assets/Living/L3/Living3-11.jpeg',
	];

	private fullImagesLivingThreeUrls: string[] = [
		'../../../../assets/Living/L3/Living3-3.jpeg',
		'../../../../assets/Living/L3/Living3-5.jpeg',
	];

	private imagesLivingFourUrls: string[] = [
		'../../../../assets/Living/L4/Living4-1.jpeg',
		'../../../../assets/Living/L4/Living4-2.jpeg',
		'../../../../assets/Living/L4/Living4-3.jpeg',
		'../../../../assets/Living/L4/Living4-4.jpeg',
		'../../../../assets/Living/L4/Living4-5.jpeg',
		'../../../../assets/Living/L4/Living4-6.jpeg',
		'../../../../assets/Living/L4/Living4-7.jpeg',
		'../../../../assets/Living/L4/Living4-8.jpeg',
		'../../../../assets/Living/L4/Living4-9.jpeg',
		'../../../../assets/Living/L4/Living4-10.jpeg',
	];

	constructor() {}

	getImgLivingOne(): string[] {
		return this.imagesLivingOneUrls;
	}

	getImgLivingTwo(): string[] {
		return this.imagesLivingTwoUrls;
	}

	getSplitImgLivingThree(): string[] {
		return this.splitImagesLivingThreeUrls;
	}

	getFullImgLivingThree(): string[] {
		return this.fullImagesLivingThreeUrls;
	}

	getImgLivingFour(): string[] {
		return this.imagesLivingFourUrls;
	}
}
