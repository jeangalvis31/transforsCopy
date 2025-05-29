import { Component } from '@angular/core';
import { cardMenu } from '../interfaces/cardmenu.interface';

@Component({
  selector: 'app-card-multicolor',
  imports: [],
  templateUrl: './card-multicolor.component.html',
  styleUrl: './card-multicolor.component.css'
})
export class CardMulticolorComponent {
  cardMenuObject: cardMenu[] = [
    {
      name: 'Normatividad',
      img: 'img/normatividad.png',
      url: ''
    },
    {
      name: 'Manuales',
      img: 'img/manuales.png',
      url: ''
    },
    {
      name: 'Contactanos',
      img: 'img/contactanos.png',
      url: ''
    },
  ]
}
