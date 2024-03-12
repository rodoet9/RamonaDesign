import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-terasa',
	templateUrl: './terasa.component.html',
	styleUrls: ['./terasa.component.scss'],
})
export class TerasaComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showTerasaOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/terasa', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
