import { Component, OnInit } from '@angular/core';
import { ImagesDormitorService } from '../images-dormitor.service';

@Component({
	selector: 'app-dormitor-three',
	templateUrl: './dormitor-three.component.html',
	styleUrls: ['./dormitor-three.component.scss'],
})
export class DormitorThreeComponent implements OnInit {
	imgDormitorThreeUrls: string[] = [];

	constructor(private imagesDormitorService: ImagesDormitorService) {}

	ngOnInit(): void {
		this.imgDormitorThreeUrls = this.imagesDormitorService.getImagesDormitorThree();
	}
}
