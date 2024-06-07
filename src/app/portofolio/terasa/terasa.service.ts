import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TerasaService {
	private imagesTerasaOneUrls: string[] = [
		'https://rdesign.twic.pics/terasa/T1/Terasa3.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa4.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa5.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa6.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa7.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa8.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa9.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa10.jpeg',
		'https://rdesign.twic.pics/terasa/T1/Terasa11.jpeg',
	];

	constructor() {}

	getImgTerasaOne(): string[] {
		return this.imagesTerasaOneUrls;
	}
}
