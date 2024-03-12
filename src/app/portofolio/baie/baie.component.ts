import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-baie',
	templateUrl: './baie.component.html',
	styleUrls: ['./baie.component.scss'],
})
export class BaieComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showBaieOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/baie', route]);
	}
	showBaieTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/baie', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
