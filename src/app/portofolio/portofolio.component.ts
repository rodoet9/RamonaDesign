import { Component } from '@angular/core';

@Component({
	selector: 'app-portofolio',
	templateUrl: './portofolio.component.html',
	styleUrls: ['./portofolio.component.scss'],
})
export class PortofolioComponent {
	imagesDormitorFolderPath = '../../assets/DormitorCompressed/';
	imagesRestaurantFolderPath = '../../assets/RestaurantCompressed/';
	imagesBunicaFolderPath = '../../assets/BunicaCompressed/';
	imagesCabanaFolderPath = '../../assets/CabanaCompressed/';
	imagesGreenFolderPath = '../../assets/GreenCompressed/';
	imagedMansardaFolderPath = '../../assets/MansardaCompressed/';
	imagesMogosoaiaFolderPath = '../../assets/MogosoaiaCompressed/';
	imagesOfficeFolderPath = '../../assets/OfficeCompressed/';
	imagesRedFolderPath = '../../assets/RedCompressed/';

	dormitorImgs = ['dormitor1.jpg', 'dormitor2.jpg', 'dormitor3.jpg', 'dormitor4.jpg', 'dormitor5.jpg'];
	restaurantImgs = [
		'restaurant1.jpg',
		'restaurant2.jpg',
		'restaurant3.jpg',
		'restaurant4.jpg',
		'restaurant5.jpg',
		'restaurant6.jpg',
		'restaurant7.jpg',
		'restaurant8.jpg',
		'restaurant9.jpg',
		'restaurant10.jpg',
		'restaurant11.jpg',
		'restaurant12.jpg',
		'restaurant13.jpg',
		'restaurant14.jpg',
		'restaurant15.jpg',
		'restaurant16.jpg',
		'restaurant17.jpg',
		'restaurant18.jpg',
		'restaurant19.jpg',
		'restaurant20.jpg',
	];
	bunicaImgs = [
		'bunica1.jpg',
		'bunica2.jpg',
		'bunica3.jpg',
		'bunica4.jpg',
		'bunica5.jpg',
		'bunica6.jpg',
		'bunica7.jpg',
		'bunica8.jpg',
		'bunica9.jpg',
		'bunica10.jpg',
		'bunica11.jpg',
		'bunica12.jpg',
		'bunica13.jpg',
		'bunica14.jpg',
	];
	cabanaImgs = [
		'cabana1.jpg',
		'cabana2.jpg',
		'cabana3.jpg',
		'cabana4.jpg',
		'cabana5.jpg',
		'cabana6.jpg',
		'cabana7.jpg',
	];
	greenImgs = [
		'green1.jpg',
		'green2.jpg',
		'green3.jpg',
		'green4.jpg',
		'green5.jpg',
		'green6.jpg',
		'green7.jpg',
		'green8.jpg',
		'green9.jpg',
		'green10.jpg',
		'green11.jpg',
		'green12.jpg',
		'green13.jpg',
		'green14.jpg',
		'green15.jpg',
		'green16.jpg',
		'green17.jpg',
		'green18.jpg',
		'green19.jpg',
		'green20.jpg',
	];

	mansardaImgs = [
		'mansarda1.jpg',
		'mansarda2.jpg',
		'mansarda3.jpg',
		'mansarda4.jpg',
		'mansarda5.jpg',
		'mansarda6.jpg',
		'mansarda7.jpg',
		'mansarda8.jpg',
		'mansarda9.jpg',
		'mansarda10.jpg',
		'mansarda11.jpg',
		'mansarda12.jpg',
		'mansarda13.jpg',
		'mansarda14.jpg',
		'mansarda15.jpg',
	];

	mogosoaiaImgs = [
		'aptmogosoaia1.jpg',
		'aptmogosoaia2.jpg',
		'aptmogosoaia3.jpg',
		'aptmogosoaia4.jpg',
		'aptmogosoaia5.jpg',
		'aptmogosoaia6.jpg',
		'aptmogosoaia7.jpg',
		'aptmogosoaia8.jpg',
		'aptmogosoaia9.jpg',
	];

	officeImgs = [
		'office1.jpeg',
		'office2.jpeg',
		'office3.jpeg',
		'office4.jpg',
		'office5.jpg',
		'office6.jpg',
		'office7.jpg',
		'office8.jpg',
		'office9.jpg',
		'office10.jpg',
		'office11.jpg',
		'office12.jpg',
		'office13.jpg',
		'office14.jpg',
		'office15.jpg',
		'office16.jpg',
		'office17.jpg',
		'office18.jpg',
		'office19.jpg',
		'office20.jpg',
	];

	redImgs = ['red1.jpg', 'red3.jpg', 'red4.jpg', 'red5.jpg'];

	getDormitorImgs(dormitorImg: string): string {
		const imagePath = this.imagesDormitorFolderPath + dormitorImg;
		return imagePath;
	}

	getRestaurantImgs(restaurantImg: string): string {
		const imagePath = this.imagesRestaurantFolderPath + restaurantImg;
		return imagePath;
	}

	getBunicaImgs(bunicaImg: string): string {
		const imagePath = this.imagesBunicaFolderPath + bunicaImg;
		return imagePath;
	}

	getCabanaImgs(cabanaImg: string): string {
		const imagePath = this.imagesCabanaFolderPath + cabanaImg;
		return imagePath;
	}

	getGreenImgs(greenImg: string): string {
		const imagePath = this.imagesGreenFolderPath + greenImg;
		return imagePath;
	}

	getMansardaImgs(mansardaImg: string): string {
		const imagePath = this.imagedMansardaFolderPath + mansardaImg;
		return imagePath;
	}

	getMogosoaiaImgs(mogosoaiaImg: string): string {
		const imagePath = this.imagesMogosoaiaFolderPath + mogosoaiaImg;
		return imagePath;
	}

	getOfficeImgs(officeImg: string): string {
		const imagePath = this.imagesOfficeFolderPath + officeImg;
		return imagePath;
	}

	getRedImgs(redImg: string): string {
		const imagePath = this.imagesRedFolderPath + redImg;
		return imagePath;
	}
}
