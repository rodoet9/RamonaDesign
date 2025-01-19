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
import { BaieThreeComponent } from './portofolio/baie/baie-three/baie-three.component';
import { BirouOneComponent } from './portofolio/birou/birou-one/birou-one.component';
import { BucatarieOneComponent } from './portofolio/bucatarie/bucatarie-one/bucatarie-one.component';
import { BucatarieTwoComponent } from './portofolio/bucatarie/bucatarie-two/bucatarie-two.component';
import { DinningRoomOneComponent } from './portofolio/dinning-room/dinning-room-one/dinning-room-one.component';
import { DinningRoomTwoComponent } from './portofolio/dinning-room/dinning-room-two/dinning-room-two.component';
import { LivingOneComponent } from './portofolio/living/living-one/living-one.component';
import { LivingTwoComponent } from './portofolio/living/living-two/living-two.component';
import { TerasaOneComponent } from './portofolio/terasa/terasa-one/terasa-one.component';
import { LivingThreeComponent } from './portofolio/living/living-three/living-three.component';
import { LivingFourComponent } from './portofolio/living/living-four/living-four.component';
import { BirouTwoComponent } from './portofolio/birou/birou-two/birou-two.component';
import { BucatarieThreeComponent } from './portofolio/bucatarie/bucatarie-three/bucatarie-three.component';
import { DinningRoomThreeComponent } from './portofolio/dinning-room/dinning-room-three/dinning-room-three.component';
import { DormitorFourComponent } from './portofolio/dormitor/dormitor-four/dormitor-four.component';
import { BaieFourComponent } from './portofolio/baie/baie-four/baie-four.component';
import { BirouThreeComponent } from './portofolio/birou/birou-three/birou-three.component';
import { BucatarieFourComponent } from './portofolio/bucatarie/bucatarie-four/bucatarie-four.component';

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
				title: 'Bedroom',
				children: [
					{
						path: 'dormitor-one',
						component: DormitorOneComponent,
						title: 'Bedroom 1',
					},
					{
						path: 'dormitor-two',
						component: DormitorTwoComponent,
						title: 'Bedroom 2',
					},
					{
						path: 'dormitor-three',
						component: DormitorThreeComponent,
						title: 'Bedroom 3',
					},
					{
						path: 'dormitor-four',
						component: DormitorFourComponent,
						title: 'Bedroom 4',
					},
				],
			},
			{
				path: 'baie',
				component: BaieComponent,
				title: 'Bathroom',
				children: [
					{
						path: 'baie-one',
						component: BaieOneComponent,
						title: 'Bathroom 1',
					},
					{
						path: 'baie-two',
						component: BaieTwoComponent,
						title: 'Bathroom 2',
					},
					{
						path: 'baie-three',
						component: BaieThreeComponent,
						title: 'Bathroom 3',
					},
					{
						path: 'baie-four',
						component: BaieFourComponent,
						title: 'Bathroom 4',
					},
				],
			},
			{
				path: 'birou',
				component: BirouComponent,
				title: 'Office',
				children: [
					{
						path: 'birou-one',
						component: BirouOneComponent,
						title: 'Office 1',
					},
					{
						path: 'birou-two',
						component: BirouTwoComponent,
						title: 'Office 2',
					},
					{
						path: 'birou-three',
						component: BirouThreeComponent,
						title: 'Office 3',
					},
				],
			},
			{
				path: 'bucatarie',
				component: BucatarieComponent,
				title: 'Kitchen',
				children: [
					{
						path: 'bucatarie-one',
						component: BucatarieOneComponent,
						title: 'Kitchen 1',
					},
					{
						path: 'bucatarie-two',
						component: BucatarieTwoComponent,
						title: 'Kitchen 2',
					},
					{ path: 'bucatarie-three', component: BucatarieThreeComponent, title: 'Kitchen 3' },
					{ path: 'bucatarie-four', component: BucatarieFourComponent, title: 'Kitchen 4' },
				],
			},
			{
				path: 'dinning-room',
				component: DinningRoomComponent,
				title: 'Dinning Area',
				children: [
					{
						path: 'dinning-room-one',
						component: DinningRoomOneComponent,
						title: 'Dinning Area 1',
					},
					{
						path: 'dinning-room-two',
						component: DinningRoomTwoComponent,
						title: 'Dinning Area 2',
					},
					{
						path: 'dinning-room-three',
						component: DinningRoomThreeComponent,
						title: 'Dinning Area 3',
					},
				],
			},
			{
				path: 'living',
				component: LivingComponent,
				title: 'Living room',
				children: [
					{
						path: 'living-one',
						component: LivingOneComponent,
						title: 'Living room 1',
					},
					{
						path: 'living-two',
						component: LivingTwoComponent,
						title: 'Living room 2',
					},
					{
						path: 'living-three',
						component: LivingThreeComponent,
						title: 'Living room 3',
					},
					{
						path: 'living-four',
						component: LivingFourComponent,
						title: 'Living room 4',
					},
				],
			},
			{
				path: 'terasa',
				component: TerasaComponent,
				title: 'Terrace',
				children: [
					{
						path: 'terasa-one',
						component: TerasaOneComponent,
						title: 'Terrace 1',
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
