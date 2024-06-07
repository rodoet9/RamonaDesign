import { Component, OnInit } from '@angular/core';
import { ImagesBucatarieService } from '../images-bucatarie.service';

@Component({
	selector: 'app-bucatarie-three',
	templateUrl: './bucatarie-three.component.html',
	styleUrls: ['./bucatarie-three.component.scss'],
})
export class BucatarieThreeComponent implements OnInit {
	public imgBucatarieThreeUrls: string[] = [];

	constructor(private imagesBucatarieService: ImagesBucatarieService) {}

	ngOnInit(): void {
		this.imgBucatarieThreeUrls = this.imagesBucatarieService.getImagesBucatarieThree();
	}
}
