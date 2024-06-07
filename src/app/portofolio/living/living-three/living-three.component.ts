import { Component, OnInit } from '@angular/core';
import { LivingService } from '../living.service';

@Component({
	selector: 'app-living-three',
	templateUrl: './living-three.component.html',
	styleUrls: ['./living-three.component.scss'],
})
export class LivingThreeComponent implements OnInit {
	public imgSplitLivingThreeUrls: string[] = [];
	public imgFullLivingThreeUrls: string[] = [];

	constructor(private livingService: LivingService) {}

	ngOnInit(): void {
		this.imgSplitLivingThreeUrls = this.livingService.getSplitImgLivingThree();
		this.imgFullLivingThreeUrls = this.livingService.getFullImgLivingThree();
	}
}
