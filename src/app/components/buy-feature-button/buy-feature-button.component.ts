import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-buy-feature-button',
  standalone: true,
  imports: [],
  providers: [CurrencyPipe],
  templateUrl: './buy-feature-button.component.html',
  styleUrl: './buy-feature-button.component.css',
})
export class BuyFeatureButtonComponent {
  bonusImageUrl: string =
    'https://logowik.com/content/uploads/images/free-vector-egyptian-pyramids-with-sphinxsilhouette5248.logowik.com.webp'; // URL of the bonus image
  betOptions: number[] = [0.1, 0.2, 0.4, 0.6, 0.8, 1, 2, 4, 6, 8, 10, 20, 40];
  @Input() currentBet: number = this.betOptions[0];

  constructor(
    public bsModalRef: BsModalRef,
    public currencyPipe: CurrencyPipe
  ) {}

  onBetSelected(betAmount: number) {
    console.log('Bet selected:', betAmount);
    this.bsModalRef.hide();
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
