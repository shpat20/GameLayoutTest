import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { BetOptionsModalComponent } from '../bet-options-modal/bet-options-modal.component';
import { AutoPlayButtonComponent } from '../auto-play-button/auto-play-button.component';

@Component({
  selector: 'app-bet-options',
  standalone: true,
  imports: [CommonModule],
  providers: [BsModalService],
  templateUrl: './bet-options.component.html',
  styleUrl: './bet-options.component.css',
})
export class BetOptionsComponent {
  currentBet: number = 0.1;
  modalRef?: BsModalRef;
  betOptions: number[] = [0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40];

  constructor(private modalService: BsModalService) {}

  openBetModal() {
    this.modalRef = this.modalService.show(BetOptionsModalComponent);
    this.modalRef.content.betSelected.subscribe((selectedBet: number) => {
      this.currentBet = selectedBet;
    });
  }

  openAutoPlayModal() {
    this.modalRef = this.modalService.show(AutoPlayButtonComponent, {
      initialState: { betAmount: this.currentBet },
    });
    this.modalRef.content.roundsSelected.subscribe(
      (selection: { rounds: number; price: number }) => {
        console.log(
          `Selected Rounds: ${selection.rounds}, Price: ${selection.price}`
        );
        this.modalRef!.hide();
      }
    );
  }

  increaseBet() {
    const currentIndex = this.betOptions.indexOf(this.currentBet);
    if (currentIndex < this.betOptions.length - 1) {
      this.currentBet = this.betOptions[currentIndex + 1];
    }
  }

  decreaseBet() {
    const currentIndex = this.betOptions.indexOf(this.currentBet);
    if (currentIndex > 0) {
      this.currentBet = this.betOptions[currentIndex - 1];
    }
  }
}
