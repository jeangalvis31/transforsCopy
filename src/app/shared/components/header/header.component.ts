import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { MenuLinksComponent } from "./menu-links/menu-links.component";
import { menuLinks } from '../../../components/interfaces/menu.interface';


@Component({
  selector: 'app-header',
  imports: [NavbarComponent, MenuLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


  routesMenu: menuLinks[] = [
    {
      name: 'Inicio',
      dir: 'portal',
      submenu: []
    }, {
      name: 'Normatividad',
      dir: 'avisos',
      submenu: []
    }, {
      name: 'Selección impuesto',
      dir: '',
      submenu: [{
        name: 'Predial',
        url: ''
      }, {
        name: 'Industria y comercio',
        url: ''
      }, {
        name: 'Deguello',
        url: ''
      }, {
        name: 'Espectáculos Públicos',
        url: ''
      }, {
        name: 'Delineación Urbano',
        url: ''
      },
    {
        name: 'Sobretasa Gasolina',
        url: ''
      },
    {
        name: 'Multas y Sanciones',
        url: ''
      },
    {
        name: 'Publicidad Exterior',
        url: ''
      },
    {
        name: 'Declaración de Estampillas',
        url: ''
      },
    {
        name: 'Multas de Transito',
        url: ''
      },]
    }, {
      name: 'Contacto',
      dir: 'contactenos',
      submenu: []
    }
  ];

  menuVisible: boolean = false;
}
