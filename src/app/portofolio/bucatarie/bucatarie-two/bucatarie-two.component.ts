import { Component, OnInit } from '@angular/core';
import { ImagesBucatarieService } from '../images-bucatarie.service';

@Component({
	selector: 'app-bucatarie-two',
	templateUrl: './bucatarie-two.component.html',
	styleUrls: ['./bucatarie-two.component.scss'],
})
export class BucatarieTwoComponent implements OnInit {
	public imgBucatarieTwoUrls: string[] = [];

	constructor(private imagesBucatarieService: ImagesBucatarieService) {}

	ngOnInit(): void {
		this.imgBucatarieTwoUrls = this.imagesBucatarieService.getImagesBucatarieTwo();
	}
}
