import { Component, OnInit } from '@angular/core';
import { ImagesDormitorService } from '../images-dormitor.service';

@Component({
	selector: 'app-dormitor-four',
	templateUrl: './dormitor-four.component.html',
	styleUrls: ['./dormitor-four.component.scss'],
})
export class DormitorFourComponent implements OnInit {
	public imgDormitorFourUrls: string[] = [];

	constructor(private imagesDormitorService: ImagesDormitorService) {}

	ngOnInit(): void {
		this.imgDormitorFourUrls = this.imagesDormitorService.getImagesDormitorFour();
	}
}
