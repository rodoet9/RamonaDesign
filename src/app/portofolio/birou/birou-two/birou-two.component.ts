import { Component, OnInit } from '@angular/core';
import { ImagesBirouService } from '../images-birou.service';

@Component({
	selector: 'app-birou-two',
	templateUrl: './birou-two.component.html',
	styleUrls: ['./birou-two.component.scss'],
})
export class BirouTwoComponent implements OnInit {
	public imgBirouTwoUrls: string[] = [];

	constructor(private imagesBirouService: ImagesBirouService) {}

	ngOnInit(): void {
		this.imgBirouTwoUrls = this.imagesBirouService.getImagesBirouTwo();
	}
}
