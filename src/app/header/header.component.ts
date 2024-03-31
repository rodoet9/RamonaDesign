import { Component } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	isMenuOpen: boolean = false;

	toggleMenu() {
		this.isMenuOpen = !this.isMenuOpen;
		console.log('Menu state:', this.isMenuOpen);
	}
}
