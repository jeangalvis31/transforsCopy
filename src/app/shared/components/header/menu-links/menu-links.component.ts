import { CommonModule, NgClass } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { menuLinks } from '../../../../components/interfaces/menu.interface';

@Component({
  selector: 'app-menu-links',
  imports: [CommonModule, NgClass],
  templateUrl: './menu-links.component.html',
  styleUrl: './menu-links.component.css'
})
export class MenuLinksComponent {
  isActive = input.required<boolean>();
  routesMenuSignal = input.required<menuLinks[]>();
}
