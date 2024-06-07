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

	public imgHomeCarousel: string[] = [
		'https://rdesign.twic.pics/homecarousel/img1.jpeg',
		'https://rdesign.twic.pics/homecarousel/img2.jpeg',
		'https://rdesign.twic.pics/homecarousel/img3.jpeg',
		'https://rdesign.twic.pics/homecarousel/img4.jpeg',
		'https://rdesign.twic.pics/homecarousel/img5.jpeg',
		'https://rdesign.twic.pics/homecarousel/img6.jpeg',
		'https://rdesign.twic.pics/homecarousel/img7.jpeg',
	];

	public homePics: string[] = [
		'https://rdesign.twic.pics/homepics/HomeTransition.jpeg',
		'https://rdesign.twic.pics/homepics/BaieCropped.jpeg',
		'https://rdesign.twic.pics/homepics/BirouCropped.jpeg',
		'https://rdesign.twic.pics/homepics/DormitorCropped.jpeg',
	];

	constructor() {}

	ngOnInit() {
		this.typeWriter();
		this.typingStarted = true;
	}

	typeWriter() {
		let i = 0;
		const speed = 75;
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
