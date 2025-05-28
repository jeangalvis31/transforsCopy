import { Component } from '@angular/core';
import { SliderComponent } from "../../components/slider/slider.component";
import { HeaderComponent } from "../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  imports: [SliderComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
