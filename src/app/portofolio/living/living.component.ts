import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-living',
	templateUrl: './living.component.html',
	styleUrls: ['./living.component.scss'],
})
export class LivingComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showLivingOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}
	showLivingTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/living', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
