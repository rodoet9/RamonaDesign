import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-living',
	templateUrl: './living.component.html',
	styleUrls: ['./living.component.scss'],
})
export class LivingComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/living') {
				this.showContent = false;
			}
		});
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

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
