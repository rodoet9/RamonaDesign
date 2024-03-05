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
import { NewDesignComponent } from './portofolio/new-design/new-design.component';
import { DormitorComponent } from './portofolio/dormitor/dormitor.component';

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
    NewDesignComponent,
    DormitorComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
