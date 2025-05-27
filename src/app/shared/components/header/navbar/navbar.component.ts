import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SessionComponent } from "../session/session.component";

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, SessionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  title: string = 'Malambo'
  year: number = new Date().getFullYear()
}
