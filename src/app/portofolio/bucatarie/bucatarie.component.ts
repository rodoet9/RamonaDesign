import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-bucatarie',
	templateUrl: './bucatarie.component.html',
	styleUrls: ['./bucatarie.component.scss'],
})
export class BucatarieComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/bucatarie') {
				this.showContent = false;
			}
		});
	}

	showBucatarieOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}
	showBucatarieTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}
	showBucatarieThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/bucatarie', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
