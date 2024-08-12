import { Component } from '@angular/core';

@Component({
  selector: 'app-spin-button',
  template: `<button (click)="spin()">Spin</button>`,
  styles: ['button { font-size: 16px; }']
})
export class SpinButtonComponent {
  spin() {
    console.log('Spin button clicked');
  }
}