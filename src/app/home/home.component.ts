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
		'assets/homeCarousel/img1.jpeg',
		'assets/homeCarousel/img2.jpeg',
		'assets/homeCarousel/img3.jpeg',
		'assets/homeCarousel/img4.jpeg',
		'assets/homeCarousel/img5.jpeg',
		'assets/homeCarousel/img6.jpeg',
		'assets/homeCarousel/img7.jpeg',
	];

	public homePics: string[] = [
		'assets/HomePics/HomeTransition.jpeg',
		'assets/HomePics/BaieCropped.jpeg',
		'assets/HomePics/BirouCropped.jpeg',
		'assets/HomePics/DormitorCropped.jpeg',
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
