import { Component, OnInit } from '@angular/core';
import { ImagesDormitorService } from '../images-dormitor.service';

@Component({
	selector: 'app-dormitor-two',
	templateUrl: './dormitor-two.component.html',
	styleUrls: ['./dormitor-two.component.scss'],
})
export class DormitorTwoComponent implements OnInit {
	imgDormitorTwoUrls: string[] = [];

	constructor(private imagesDormitorService: ImagesDormitorService) {}

	ngOnInit(): void {
		this.imgDormitorTwoUrls = this.imagesDormitorService.getImagesDormitorTwo();
	}
}
