import { Component, OnInit } from '@angular/core';
import { ImagesBaieService } from '../images-baie.service';

@Component({
	selector: 'app-baie-one',
	templateUrl: './baie-one.component.html',
	styleUrls: ['./baie-one.component.scss'],
})
export class BaieOneComponent implements OnInit {
	imgBaieOneUrls: string[] = [];

	constructor(private imagesBaieService: ImagesBaieService) {}

	ngOnInit() {
		this.imgBaieOneUrls = this.imagesBaieService.getImagesBaieOne();
	}
}
