import { Component, OnInit } from '@angular/core';
import { ImagesBirouService } from '../images-birou.service';

@Component({
	selector: 'app-birou-three',
	templateUrl: './birou-three.component.html',
	styleUrls: ['./birou-three.component.scss'],
})
export class BirouThreeComponent implements OnInit {
	imgBirouThreeUrls: string[] = [];

	constructor(private imagesBirouService: ImagesBirouService) {}

	ngOnInit() {
		this.imgBirouThreeUrls = this.imagesBirouService.getImagesBirouThree();
	}

	imageOrientations: { [key: string]: boolean } = {};

	checkOrientation(event: Event, url: string) {
		const img = event.target as HTMLImageElement;
		this.imageOrientations[url] = img.naturalHeight > img.naturalWidth;
	}

	isPortrait(url: string): boolean {
		return this.imageOrientations[url] ?? true;
	}
}
