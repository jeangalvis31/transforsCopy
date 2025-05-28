import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { MenuLinksComponent } from "./menu-links/menu-links.component";


@Component({
  selector: 'app-header',
  imports: [NavbarComponent, MenuLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
menuVisible: boolean = false;
}
