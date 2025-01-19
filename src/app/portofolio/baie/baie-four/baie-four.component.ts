import { Component, OnInit } from '@angular/core';
import { ImagesBaieService } from '../images-baie.service';

@Component({
	selector: 'app-baie-four',
	templateUrl: './baie-four.component.html',
	styleUrls: ['./baie-four.component.scss'],
})
export class BaieFourComponent implements OnInit {
	imgBaieFourUrls: string[] = [];

	constructor(private imagesBaieService: ImagesBaieService) {}

	ngOnInit() {
		this.imgBaieFourUrls = this.imagesBaieService.getImagesBaieFour();
	}
}
