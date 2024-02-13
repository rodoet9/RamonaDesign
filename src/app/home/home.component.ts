import { Component } from '@angular/core';
@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	pauseOnHover = true;

	imagesFolderPath = '/assets/homeCarousel/';

	imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg'];

	getImagePath(imageName: string): string {
		const imagePath = this.imagesFolderPath + imageName;
		return imagePath;
	}
}
