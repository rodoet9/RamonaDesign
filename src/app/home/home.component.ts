import { Component } from "@angular/core";
import { NgbCarouselModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  pauseOnHover = true;

  imagesFolderPath = "../../assets/DormitorCompressed/";

  imageNames = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

  getImagePath(imageName: string): string {
    const imagePath = this.imagesFolderPath + imageName;
    return imagePath;
  }
}
