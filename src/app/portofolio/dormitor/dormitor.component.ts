import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-dormitor',
	templateUrl: './dormitor.component.html',
	styleUrls: ['./dormitor.component.scss'],
})
export class DormitorComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showDormitorOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}
	showDormitorTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}
	showDormitorThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}

	// imagesDormitorFolderPath = '../../../assets/DormitorCompressed/';

	// dormitorImgs = ['dormitor1.jpg', 'dormitor2.jpg', 'dormitor3.jpg', 'dormitor4.jpg', 'dormitor5.jpg'];

	// getDormitorImgs(dormitorImg: string): string {
	// 	const imagePath = this.imagesDormitorFolderPath + dormitorImg;
	// 	return imagePath;
	// }
}
