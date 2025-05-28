import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-session',
  imports: [CommonModule],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent {
  isArrowRotated = false;

  toggleArrow() {
    this.isArrowRotated = !this.isArrowRotated;
  }
}
