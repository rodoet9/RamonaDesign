import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs';

@Component({
	selector: 'app-portofolio',
	templateUrl: './portofolio.component.html',
	styleUrls: ['./portofolio.component.scss'],
})
export class PortofolioComponent implements OnInit {
	showContent: boolean = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio') {
				this.showContent = false;
			}
		});
	}

	showDormitor(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBaie(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBirou(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showBucatarie(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showDinningRoom(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showLiving(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}
	showTerasa(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
