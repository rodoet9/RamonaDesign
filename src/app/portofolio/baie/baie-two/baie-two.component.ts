import { Component, OnInit } from '@angular/core';
import { ImagesBaieService } from '../images-baie.service';

@Component({
	selector: 'app-baie-two',
	templateUrl: './baie-two.component.html',
	styleUrls: ['./baie-two.component.scss'],
})
export class BaieTwoComponent implements OnInit {
	imgBaieTwoUrls: string[] = [];

	constructor(private imagesBaieService: ImagesBaieService) {}

	ngOnInit() {
		this.imgBaieTwoUrls = this.imagesBaieService.getImagesBaieTwo();
	}
}
