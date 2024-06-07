import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ImagesBucatarieService } from './images-bucatarie.service';

@Component({
	selector: 'app-bucatarie',
	templateUrl: './bucatarie.component.html',
	styleUrls: ['./bucatarie.component.scss'],
})
export class BucatarieComponent implements OnInit {
	showContent = false;

	public imageBucatarieOne: string[] = [];
	public imageBucatarieTwo: string[] = [];
	public imageBucatarieThree: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private imagesBucatarieService: ImagesBucatarieService
	) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/bucatarie') {
				this.showContent = false;
			}
		});

		this.imageBucatarieOne = this.imagesBucatarieService.getImagesBucatarieOne();
		this.imageBucatarieTwo = this.imagesBucatarieService.getImagesBucatarieTwo();
		this.imageBucatarieThree = this.imagesBucatarieService.getImagesBucatarieThree();
	}

	showBucatarieOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}
	showBucatarieTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}
	showBucatarieThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
