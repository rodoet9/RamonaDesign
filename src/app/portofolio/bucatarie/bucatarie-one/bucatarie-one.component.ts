import { Component, OnInit } from '@angular/core';
import { ImagesBucatarieService } from '../images-bucatarie.service';

@Component({
	selector: 'app-bucatarie-one',
	templateUrl: './bucatarie-one.component.html',
	styleUrls: ['./bucatarie-one.component.scss'],
})
export class BucatarieOneComponent implements OnInit {
	public imgBucatarieOneUrls: string[] = [];

	constructor(private imagesBucatarieService: ImagesBucatarieService) {}

	ngOnInit(): void {
		this.imgBucatarieOneUrls = this.imagesBucatarieService.getImagesBucatarieOne();
	}
}
