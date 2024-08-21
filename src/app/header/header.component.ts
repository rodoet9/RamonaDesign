import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	public logoNavbar: string = '../../../../assets/zoomed-in-logo-patrat-removebg-2.png';
}
