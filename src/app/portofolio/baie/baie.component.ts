import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';

@Component({
	selector: 'app-baie',
	templateUrl: './baie.component.html',
	styleUrls: ['./baie.component.scss'],
})
export class BaieComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/baie') {
				this.showContent = false;
			}
		});
	}

	showBaieOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/baie', route]);
	}
	showBaieTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/baie', route]);
	}

	showBaieThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/baie', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
