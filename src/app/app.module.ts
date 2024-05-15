import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ContactPageComponent } from './contact/contact-page/contact-page.component';
import { StandardDetailsComponent } from './services/standard-details/standard-details.component';
import { PremiumDetailsComponent } from './services/premium-details/premium-details.component';
import { UltraDetailsComponent } from './services/ultra-details/ultra-details.component';
import { DormitorComponent } from './portofolio/dormitor/dormitor.component';
import { BaieComponent } from './portofolio/baie/baie.component';
import { BirouComponent } from './portofolio/birou/birou.component';
import { BucatarieComponent } from './portofolio/bucatarie/bucatarie.component';
import { DinningRoomComponent } from './portofolio/dinning-room/dinning-room.component';
import { LivingComponent } from './portofolio/living/living.component';
import { TerasaComponent } from './portofolio/terasa/terasa.component';
import { DormitorOneComponent } from './portofolio/dormitor/dormitor-one/dormitor-one.component';
import { DormitorTwoComponent } from './portofolio/dormitor/dormitor-two/dormitor-two.component';
import { DormitorThreeComponent } from './portofolio/dormitor/dormitor-three/dormitor-three.component';
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
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MatExpansionModule } from '@angular/material/expansion';
import { LivingThreeComponent } from './portofolio/living/living-three/living-three.component';
import { BaieThreeComponent } from './portofolio/baie/baie-three/baie-three.component';
import { LivingFourComponent } from './portofolio/living/living-four/living-four.component';
import { BirouTwoComponent } from './portofolio/birou/birou-two/birou-two.component';
import { BucatarieThreeComponent } from './portofolio/bucatarie/bucatarie-three/bucatarie-three.component';
import { DinningRoomThreeComponent } from './portofolio/dinning-room/dinning-room-three/dinning-room-three.component';
import { DormitorFourComponent } from './portofolio/dormitor/dormitor-four/dormitor-four.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		ServicesComponent,
		PortofolioComponent,
		ContactComponent,
		HeaderComponent,
		FooterComponent,
		ContactPageComponent,
		StandardDetailsComponent,
		PremiumDetailsComponent,
		UltraDetailsComponent,
		DormitorComponent,
		BaieComponent,
		BirouComponent,
		BucatarieComponent,
		DinningRoomComponent,
		LivingComponent,
		TerasaComponent,
		DormitorOneComponent,
		DormitorTwoComponent,
		DormitorThreeComponent,
		BaieOneComponent,
		BaieTwoComponent,
		BirouOneComponent,
		BucatarieOneComponent,
		BucatarieTwoComponent,
		DinningRoomOneComponent,
		DinningRoomTwoComponent,
		LivingOneComponent,
		LivingTwoComponent,
		TerasaOneComponent,
		LivingThreeComponent,
		BaieThreeComponent,
		LivingFourComponent,
		BirouTwoComponent,
		BucatarieThreeComponent,
		DinningRoomThreeComponent,
		DormitorFourComponent,
	],
	imports: [
		MatTabsModule,
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		BrowserAnimationsModule,
		MatSlideToggleModule,
		MatButtonModule,
		MatDividerModule,
		NgbCarouselModule,
		NgIf,
		MatCardModule,
		MatDialogModule,
		RouterModule,
		MatToolbarModule,
		MatIconModule,
		MdbAccordionModule,
		MdbCarouselModule,
		MdbCheckboxModule,
		MdbCollapseModule,
		MdbDropdownModule,
		MdbFormsModule,
		MdbModalModule,
		MdbPopoverModule,
		MdbRadioModule,
		MdbRangeModule,
		MdbRippleModule,
		MdbScrollspyModule,
		MdbTabsModule,
		MdbTooltipModule,
		MdbValidationModule,
		MatExpansionModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
