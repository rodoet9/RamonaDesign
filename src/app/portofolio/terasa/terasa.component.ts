import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-terasa',
	templateUrl: './terasa.component.html',
	styleUrls: ['./terasa.component.scss'],
})
export class TerasaComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/terasa') {
				this.showContent = false;
			}
		});
	}

	showTerasaOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/terasa', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
