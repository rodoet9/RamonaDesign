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

	public imgPortofoliu = [
		{
			title: 'Idei de design dormitor',
			url: '../../../../assets/Dormitor/DormitorPortofoliu.png',
			category: 'dormitor',
		},
		{
			title: 'Idei de design baie',
			url: '../../../../assets/Baie/BaiePortofoliu.png',
			category: 'baie',
		},
		{
			title: 'Idei de design birou',
			url: '../../../../assets/Birou/BirouPortofoliu.png',
			category: 'birou',
		},
		{
			title: 'Idei de design bucatarie',
			url: '../../../../assets/Bucatarie/BucatariePortofoliu.png',
			category: 'bucatarie',
		},
		{
			title: 'Idei de design dinning room',
			url: '../../../../assets/DinningRoom/DinningAreaPortofoliu.png',
			category: 'dinning-room',
		},
		{
			title: 'Idei de design living',
			url: '../../../../assets/Living/LivingPortofoliu.png',
			category: 'living',
		},
		{
			title: 'Idei de design terasa',
			url: '../../../../assets/Terasa/TerasaPortofoliu.png',
			category: 'terasa',
		},
	];

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio') {
				this.showContent = false;
			}
		});
	}

	showCategory(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
