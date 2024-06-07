import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { DinningRoomService } from './dinning-room.service';

@Component({
	selector: 'app-dinning-room',
	templateUrl: './dinning-room.component.html',
	styleUrls: ['./dinning-room.component.scss'],
})
export class DinningRoomComponent implements OnInit {
	showContent = false;

	public imgDinningRoomOneUrl: string[] = [];
	public imgDinningRoomTwoUrl: string[] = [];
	public imgDinningRoomThreeUrl: string[] = [];

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private location: Location,
		private dinningRoomService: DinningRoomService
	) {}

	ngOnInit(): void {
		this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
			if (this.location.path() === '/portofolio/dinning-room') {
				this.showContent = false;
			}
		});
		this.imgDinningRoomOneUrl = this.dinningRoomService.getImagesDinningRoomOne();
		this.imgDinningRoomTwoUrl = this.dinningRoomService.getImagesDinningRoomTwo();
		this.imgDinningRoomThreeUrl = this.dinningRoomService.getImagesDinningRoomThree();
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
