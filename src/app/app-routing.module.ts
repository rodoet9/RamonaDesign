import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { DormitorComponent } from './portofolio/dormitor/dormitor.component';
import { BaieComponent } from './portofolio/baie/baie.component';
import { BirouComponent } from './portofolio/birou/birou.component';
import { BucatarieComponent } from './portofolio/bucatarie/bucatarie.component';
import { DinningRoomComponent } from './portofolio/dinning-room/dinning-room.component';
import { LivingComponent } from './portofolio/living/living.component';
import { TerasaComponent } from './portofolio/terasa/terasa.component';
import { DormitorOneComponent } from './portofolio/dormitor/dormitor-one/dormitor-one.component';
import { DormitorThreeComponent } from './portofolio/dormitor/dormitor-three/dormitor-three.component';
import { DormitorTwoComponent } from './portofolio/dormitor/dormitor-two/dormitor-two.component';
import { BaieOneComponent } from './portofolio/baie/baie-one/baie-one.component';
import { BaieTwoComponent } from './portofolio/baie/baie-two/baie-two.component';
import { BirouOneComponent } from './portofolio/birou/birou-one/birou-one.component';
import { BucatarieOneComponent } from './portofolio/bucatarie/bucatarie-one/bucatarie-one.component';
import { BucatarieTwoComponent } from './portofolio/bucatarie/bucatarie-two/bucatarie-two.component';
import { DinningRoomOneComponent } from './portofolio/dinning-room/dinning-room-one/dinning-room-one.component';
import { DinningRoomTwoComponent } from './portofolio/dinning-room/dinning-room-two/dinning-room-two.component';
import { LivingOneComponent } from './portofolio/living/living-one/living-one.component';
import { LivingTwoComponent } from './portofolio/living/living-two/living-two.component';
import { TerasaOneComponent } from './portofolio/terasa/terasa-one/terasa-one.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		title: 'Acasa',
	},
	{
		path: 'services',
		component: ServicesComponent,
		title: 'Servicii',
	},
	{
		path: 'portofolio',
		component: PortofolioComponent,
		title: 'Portofoliu',
		children: [
			{
				path: 'dormitor',
				component: DormitorComponent,
				title: 'Idei de design dormitor',
				children: [
					{
						path: 'dormitor-one',
						component: DormitorOneComponent,
						title: 'Dormitor 1',
					},
					{
						path: 'dormitor-two',
						component: DormitorTwoComponent,
						title: 'Dormitor 2',
					},
					{
						path: 'dormitor-three',
						component: DormitorThreeComponent,
						title: 'Dormitor 3',
					},
				],
			},
			{
				path: 'baie',
				component: BaieComponent,
				title: 'Idei de design baie',
				children: [
					{
						path: 'baie-one',
						component: BaieOneComponent,
						title: 'Baie 1',
					},
					{
						path: 'baie-two',
						component: BaieTwoComponent,
						title: 'Baie 2',
					},
				],
			},
			{
				path: 'birou',
				component: BirouComponent,
				title: 'Idei de design birou',
				children: [
					{
						path: 'birou-one',
						component: BirouOneComponent,
						title: 'Birou 1',
					},
				],
			},
			{
				path: 'bucatarie',
				component: BucatarieComponent,
				title: 'Idei de design bucatarie',
				children: [
					{
						path: 'bucatarie-one',
						component: BucatarieOneComponent,
						title: 'Bucatarie 1',
					},
					{
						path: 'bucatarie-two',
						component: BucatarieTwoComponent,
						title: 'Bucatarie 2',
					},
				],
			},
			{
				path: 'dinning-room',
				component: DinningRoomComponent,
				title: 'Idei de design dinning area',
				children: [
					{
						path: 'dinning-room-one',
						component: DinningRoomOneComponent,
						title: 'Dinning room 1',
					},
					{
						path: 'dinning-room-two',
						component: DinningRoomTwoComponent,
						title: 'Dinning room 2',
					},
				],
			},
			{
				path: 'living',
				component: LivingComponent,
				title: 'Idei de design living',
				children: [
					{
						path: 'living-one',
						component: LivingOneComponent,
						title: 'Living 1',
					},
					{
						path: 'living-two',
						component: LivingTwoComponent,
						title: 'Living 2',
					},
				],
			},
			{
				path: 'terasa',
				component: TerasaComponent,
				title: 'Idei de design terasa',
				children: [
					{
						path: 'terasa-one',
						component: TerasaOneComponent,
						title: 'Terasa 1',
					},
				],
			},
		],
	},
	{
		path: 'contact',
		component: ContactPageComponent,
		title: 'Contacteaza-ne',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
