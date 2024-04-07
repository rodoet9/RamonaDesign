import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
	selector: 'app-contact-page',
	templateUrl: './contact-page.component.html',
	styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {
	panelOpenState = false;
}
