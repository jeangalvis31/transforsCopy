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
      dir: 'portal'
    }, {
      name: 'Normatividad',
      dir: 'avisos'
    }, {
      name: 'Selección impuesto',
      dir: ''
    }, {
      name: 'Contacto',
      dir: 'contactenos'
    }
  ];

  menuVisible: boolean = false;
}
