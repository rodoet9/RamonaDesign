import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
	selector: 'app-dinning-room',
	templateUrl: './dinning-room.component.html',
	styleUrls: ['./dinning-room.component.scss'],
})
export class DinningRoomComponent implements OnInit {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/dinning-room') {
				this.showContent = false;
			}
		});
	}

	showDinningRoomOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dinning-room', route]);
	}
	showDinningRoomTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dinning-room', route]);
	}
	showDinningRoomThree(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dinning-room', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
