import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';
import { ImagesBirouService } from './images-birou.service';

@Component({
	selector: 'app-birou',
	templateUrl: './birou.component.html',
	styleUrls: ['./birou.component.scss'],
})
export class BirouComponent implements OnInit {
	showContent = false;

	public imageBirouOne: string[] = [];
	public imageBirouTwo: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private imagesBirouService: ImagesBirouService
	) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/birou') {
				this.showContent = false;
			}
		});

		this.imageBirouOne = this.imagesBirouService.getImagesBirouOne();
		this.imageBirouTwo = this.imagesBirouService.getImagesBirouTwo();
	}

	showBirouOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/birou', route]);
	}

	showBirouTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/birou', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
