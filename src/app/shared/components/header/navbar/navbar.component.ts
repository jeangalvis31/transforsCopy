import { Component, EventEmitter, Output, signal } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { SessionComponent } from "../session/session.component";
import { MenuLinksComponent } from "../menu-links/menu-links.component";

@Component({
  selector: 'app-navbar',
  imports: [LogoComponent, SessionComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  title: string = 'Malambo'
  year: number = new Date().getFullYear();

  @Output() menuToggle = new EventEmitter<boolean>();
  menuVisible = false;

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
    this.menuToggle.emit(this.menuVisible);
  }
}
