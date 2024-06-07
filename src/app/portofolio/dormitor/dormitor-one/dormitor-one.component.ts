import { Component, OnInit } from '@angular/core';
import { ImagesDormitorService } from '../images-dormitor.service';

@Component({
	selector: 'app-dormitor-one',
	templateUrl: './dormitor-one.component.html',
	styleUrls: ['./dormitor-one.component.scss'],
})
export class DormitorOneComponent implements OnInit {
	public imgDormitorOneUrls: string[] = [];

	constructor(private imagesDormitorService: ImagesDormitorService) {}

	ngOnInit() {
		this.imgDormitorOneUrls = this.imagesDormitorService.getImagesDormitorOne();
	}
}
