import { Component, OnInit } from '@angular/core';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	pauseOnHover = true;
	quote: string = 'An empty room is a story waiting to happen, and we are the authors.';
	typedText: string = '';
	typingStarted: boolean = false;

	constructor() {}

	ngOnInit() {
		this.typeWriter();
		this.typingStarted = true;
	}

	imagesFolderPath = '/assets/homeCarousel/';

	imageNames = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg'];

	getImagePath(imageName: string): string {
		const imagePath = this.imagesFolderPath + imageName;
		return imagePath;
	}

	typeWriter() {
		let i = 0;
		const speed = 100;
		const typingInterval = setInterval(() => {
			if (i < this.quote.length) {
				this.typedText += this.quote.charAt(i);
				i++;
			} else {
				clearInterval(typingInterval);
			}
		}, speed);
	}
}
