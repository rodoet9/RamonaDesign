import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-dormitor',
	templateUrl: './dormitor.component.html',
	styleUrls: ['./dormitor.component.scss'],
})
export class DormitorComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/dormitor') {
				this.showContent = false;
			}
		});
	}

	showDormitorOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}
	showDormitorTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}
	showDormitorThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dormitor', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
