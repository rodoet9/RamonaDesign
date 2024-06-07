import { Component, OnInit } from '@angular/core';
import { LivingService } from '../living.service';

@Component({
	selector: 'app-living-one',
	templateUrl: './living-one.component.html',
	styleUrls: ['./living-one.component.scss'],
})
export class LivingOneComponent implements OnInit {
	public imgLivingOneUrls: string[] = [];

	constructor(private livingService: LivingService) {}

	ngOnInit(): void {
		this.imgLivingOneUrls = this.livingService.getImgLivingOne();
	}
}
