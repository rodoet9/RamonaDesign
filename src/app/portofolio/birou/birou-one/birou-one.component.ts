import { Component, OnInit } from '@angular/core';
import { ImagesBirouService } from '../images-birou.service';

@Component({
	selector: 'app-birou-one',
	templateUrl: './birou-one.component.html',
	styleUrls: ['./birou-one.component.scss'],
})
export class BirouOneComponent implements OnInit {
	public imgBirouOneUrls: string[] = [];

	constructor(private imagesBirouService: ImagesBirouService) {}

	ngOnInit(): void {
		this.imgBirouOneUrls = this.imagesBirouService.getImagesBirouOne();
	}
}
