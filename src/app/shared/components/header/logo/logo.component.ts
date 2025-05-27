import { Component } from '@angular/core';


@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent {

  imagePath = 'img/transforLogo.png';
  alt: string = 'Logo';

}
