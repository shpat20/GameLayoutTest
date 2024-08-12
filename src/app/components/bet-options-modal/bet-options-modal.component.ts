import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-bet-options-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bet-options-modal.component.html',
  styleUrl: './bet-options-modal.component.css',
})
export class BetOptionsModalComponent {
  @Output() betSelected = new EventEmitter<number>();
  betOptions: number[] = [0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40];

  constructor(public bsModalRef: BsModalRef) {}

  selectBet(amount: number) {
    this.betSelected.emit(amount);
    this.bsModalRef.hide();
  }
}
