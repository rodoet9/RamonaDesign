import { Component, OnInit } from '@angular/core';
import { LivingService } from '../living.service';

@Component({
	selector: 'app-living-two',
	templateUrl: './living-two.component.html',
	styleUrls: ['./living-two.component.scss'],
})
export class LivingTwoComponent implements OnInit {
	public imgLivingTwoUrls: string[] = [];

	constructor(private livingService: LivingService) {}

	ngOnInit(): void {
		this.imgLivingTwoUrls = this.livingService.getImgLivingTwo();
	}
}
