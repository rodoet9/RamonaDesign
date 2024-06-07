import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TerasaService } from './terasa.service';

@Component({
	selector: 'app-terasa',
	templateUrl: './terasa.component.html',
	styleUrls: ['./terasa.component.scss'],
})
export class TerasaComponent implements OnInit {
	showContent = false;

	public imgTerasaOneUrl: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private terasaService: TerasaService
	) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/terasa') {
				this.showContent = false;
			}
		});
		this.imgTerasaOneUrl = this.terasaService.getImgTerasaOne();
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
