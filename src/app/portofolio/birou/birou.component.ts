import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-birou',
	templateUrl: './birou.component.html',
	styleUrls: ['./birou.component.scss'],
})
export class BirouComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showBirouOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/birou', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
