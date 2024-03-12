import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-portofolio',
	templateUrl: './portofolio.component.html',
	styleUrls: ['./portofolio.component.scss'],
})
export class PortofolioComponent {
	// imagesDormitorFolderPath = '../../assets/DormitorCompressed/';
	// imagesRestaurantFolderPath = '../../assets/RestaurantCompressed/';
	// imagesBunicaFolderPath = '../../assets/BunicaCompressed/';
	// imagesCabanaFolderPath = '../../assets/CabanaCompressed/';
	// imagesGreenFolderPath = '../../assets/GreenCompressed/';
	// imagedMansardaFolderPath = '../../assets/MansardaCompressed/';
	// imagesMogosoaiaFolderPath = '../../assets/MogosoaiaCompressed/';
	// imagesOfficeFolderPath = '../../assets/OfficeCompressed/';
	// imagesRedFolderPath = '../../assets/RedCompressed/';

	showContent: boolean = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showDormitor(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBaie(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBirou(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBucatarie(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showDinningRoom(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showLiving(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showTerasa(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}

	// dormitorImgs = ['dormitor1.jpg', 'dormitor2.jpg', 'dormitor3.jpg', 'dormitor4.jpg', 'dormitor5.jpg'];

	// getDormitorImgs(dormitorImg: string): string {
	// 	const imagePath = this.imagesDormitorFolderPath + dormitorImg;
	// 	return imagePath;
	// }
}
