import { Component, OnInit } from '@angular/core';
import { ImagesBaieService } from '../images-baie.service';

@Component({
	selector: 'app-baie-three',
	templateUrl: './baie-three.component.html',
	styleUrls: ['./baie-three.component.scss'],
})
export class BaieThreeComponent implements OnInit {
	imgBaieThreeUrls: string[] = [];

	constructor(private imagesBaieService: ImagesBaieService) {}

	ngOnInit() {
		this.imgBaieThreeUrls = this.imagesBaieService.getImagesBaieThree();
	}
}
