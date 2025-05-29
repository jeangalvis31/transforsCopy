import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { CardMenuComponent } from "../../components/card-menu/card-menu.component";
import { CardMulticolorComponent } from "../../components/card-multicolor/card-multicolor.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, HeaderComponent, CardMenuComponent, CardMulticolorComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
