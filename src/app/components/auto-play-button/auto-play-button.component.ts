import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-auto-play-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auto-play-button.component.html',
  styleUrl: './auto-play-button.component.css',
})
export class AutoPlayButtonComponent {
  @Input() betAmount: number = 0;
  @Output() roundsSelected = new EventEmitter<{
    rounds: number;
    price: number;
  }>();

  autoPlayOptions: number[] = [20, 50, 100];

  constructor(public bsModalRef: BsModalRef) {}

  selectOption(rounds: number) {
    const price = rounds * this.betAmount;
    this.roundsSelected.emit({ rounds, price });
    this.bsModalRef.hide();
  }
}
