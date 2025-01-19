import { Component, OnInit } from '@angular/core';
import { ImagesBucatarieService } from '../images-bucatarie.service';

@Component({
	selector: 'app-bucatarie-four',
	templateUrl: './bucatarie-four.component.html',
	styleUrls: ['./bucatarie-four.component.scss'],
})
export class BucatarieFourComponent implements OnInit {
	imgBucatarieFourUrls: string[] = [];

	constructor(private imagesBucatarieService: ImagesBucatarieService) {}

	ngOnInit() {
		this.imgBucatarieFourUrls = this.imagesBucatarieService.getImagesBucatarieFour();
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
