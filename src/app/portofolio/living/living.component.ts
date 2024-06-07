import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { LivingService } from './living.service';

@Component({
	selector: 'app-living',
	templateUrl: './living.component.html',
	styleUrls: ['./living.component.scss'],
})
export class LivingComponent implements OnInit {
	showContent = false;

	public imageLivingOne: string[] = [];
	public imageLivingTwo: string[] = [];
	public imageLivingThree: string[] = [];
	public imageLivingFour: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private livingService: LivingService
	) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/living') {
				this.showContent = false;
			}
		});

		this.imageLivingOne = this.livingService.getImgLivingOne();
		this.imageLivingTwo = this.livingService.getImgLivingTwo();
		this.imageLivingThree = this.livingService.getSplitImgLivingThree();
		this.imageLivingThree = this.livingService.getFullImgLivingThree();
		this.imageLivingFour = this.livingService.getImgLivingFour();
	}

	showLivingOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}
	showLivingTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}
	showLivingThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}

	showLivingFour(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
