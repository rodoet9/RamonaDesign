import { Component, OnInit } from '@angular/core';
import { LivingService } from '../living.service';

@Component({
	selector: 'app-living-four',
	templateUrl: './living-four.component.html',
	styleUrls: ['./living-four.component.scss'],
})
export class LivingFourComponent implements OnInit {
	public imgLivingFourUrls: string[] = [];

	constructor(private livingService: LivingService) {}

	ngOnInit(): void {
		this.imgLivingFourUrls = this.livingService.getImgLivingFour();
	}
}
