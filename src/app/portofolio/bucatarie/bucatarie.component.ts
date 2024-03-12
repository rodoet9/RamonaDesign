import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-bucatarie',
	templateUrl: './bucatarie.component.html',
	styleUrls: ['./bucatarie.component.scss'],
})
export class BucatarieComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showBucatarieOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}
	showBucatarieTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
