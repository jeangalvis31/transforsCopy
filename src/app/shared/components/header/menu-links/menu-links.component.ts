import { CommonModule, NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-menu-links',
  imports: [CommonModule, NgClass],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
routesMenu: string[]= [
  "Inicio",
  "Normatividad",
  "Selección impuesto",
  "Contacto"
];

  isActive = input.required<boolean>();
}
