import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class TerasaService {
	private imagesTerasaOneUrls: string[] = [
		'assets/Terasa/T1/Terasa3.jpeg',
		'assets/Terasa/T1/Terasa4.jpeg',
		'assets/Terasa/T1/Terasa5.jpeg',
		'assets/Terasa/T1/Terasa6.jpeg',
		'assets/Terasa/T1/Terasa7.jpeg',
		'assets/Terasa/T1/Terasa8.jpeg',
		'assets/Terasa/T1/Terasa9.jpeg',
		'assets/Terasa/T1/Terasa10.jpeg',
		'assets/Terasa/T1/Terasa11.jpeg',
	];

	constructor() {}

	getImgTerasaOne(): string[] {
		return this.imagesTerasaOneUrls;
	}
}
