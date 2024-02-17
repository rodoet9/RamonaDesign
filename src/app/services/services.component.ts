import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandardDetailsComponent } from '../services/standard-details/standard-details.component';
import { PremiumDetailsComponent } from '../services/premium-details/premium-details.component';
import { UltraDetailsComponent } from '../services/ultra-details/ultra-details.component';

@Component({
	selector: 'app-services',
	templateUrl: './services.component.html',
	styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
	constructor(public dialog: MatDialog) {}

	openDetails(componentDetails: string) {
		let dialogRef;
		switch (componentDetails) {
			case 'standard':
				dialogRef = this.dialog.open(StandardDetailsComponent, {
					width: '50%',
				});
				break;
			case 'premium':
				dialogRef = this.dialog.open(PremiumDetailsComponent, {
					width: '50%',
					height: '80%',
					autoFocus: false,
				});
				break;
			case 'ultra':
				dialogRef = this.dialog.open(UltraDetailsComponent, {
					width: '50%',
					height: '80%',
					autoFocus: false,
				});
				break;
			default:
				break;
		}
	}
}
