import { Component } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss'],
})
export class PortofolioComponent {
  imagesFolderPath = '../../assets/DormitorCompressed/';

  imageNames = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

  getImagePath(imageName: string): string {
    const imagePath = this.imagesFolderPath + imageName;
    return imagePath;
  }
}
