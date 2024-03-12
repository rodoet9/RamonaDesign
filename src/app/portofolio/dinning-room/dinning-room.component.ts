import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-dinning-room',
	templateUrl: './dinning-room.component.html',
	styleUrls: ['./dinning-room.component.scss'],
})
export class DinningRoomComponent {
	showContent = false;

	constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

	showDinningRoomOne(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dinning-room', route]);
	}
	showDinningRoomTwo(route: string) {
		this.showContent = true;
		this.router.navigate(['/portofolio/dinning-room', route]);
	}

	hideContent(): void {
		this.showContent = false;
		this.location.back();
	}
}
