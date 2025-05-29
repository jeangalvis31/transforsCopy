import { Component } from '@angular/core';
import { cardMenu } from '../interfaces/cardmenu.interface';

@Component({
  selector: 'app-card-menu',
  imports: [],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.css'
})
export class CardMenuComponent {
  cardMenuObject: cardMenu[] = [
    {
      name: 'Predial',
      img: 'img/predial_portal.png',
      url: ''
    },
    {
      name: 'Industria y Comercio',
      img: 'img/indcio_portal.png',
      url: ''
    },
    {
      name: 'Degüello',
      img: 'img/ganado_portal.png',
      url: ''
    },
    {
      name: 'Espectáculos Públicos',
      img: 'img/espectaculos_portal.png',
      url: ''
    },
    {
      name: 'Delineación Urbana',
      img: 'img/delineacion_portal.png',
      url: ''
    },
    {
      name: 'Sobretasa Gasolina',
      img: 'img/sobretasa_gaso_portal.png',
      url: ''
    },
    {
      name: 'Multas y Sanciones',
      img: 'img/multas_portal.png',
      url: ''
    },
    {
      name: 'Publicidad Exterior',
      img: 'img/publicidad_portal.png',
      url: ''
    },
    {
      name: 'Declaración de Estampillas',
      img: 'img/estampillas_portal.png',
      url: ''
    },
    {
      name: 'Multas de transito',
      img: 'img/transito_portal.png',
      url: ''
    },
  ]
}

