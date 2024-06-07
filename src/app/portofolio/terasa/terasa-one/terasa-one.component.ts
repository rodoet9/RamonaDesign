import { Component, OnInit } from '@angular/core';
import { TerasaService } from '../terasa.service';
@Component({
	selector: 'app-terasa-one',
	templateUrl: './terasa-one.component.html',
	styleUrls: ['./terasa-one.component.scss'],
})
export class TerasaOneComponent implements OnInit {
	public imgTerasaOneUrls: string[] = [];

	constructor(private terasaService: TerasaService) {}

	ngOnInit(): void {
		this.imgTerasaOneUrls = this.terasaService.getImgTerasaOne();
	}
}
