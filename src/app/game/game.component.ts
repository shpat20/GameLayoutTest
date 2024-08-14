import { Component } from '@angular/core';
import { BetOptionsComponent } from '../components/bet-options/bet-options.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HamburgerMenuDialogComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { BuyFeatureButtonComponent } from '../components/buy-feature-button/buy-feature-button.component';
import { CommonModule, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BetOptionsComponent, CommonModule],
  providers: [BsModalService, CurrencyPipe],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  bsModalRef?: BsModalRef;
  bonusImageUrl: string =
    'https://logowik.com/content/uploads/images/free-vector-egyptian-pyramids-with-sphinxsilhouette5248.logowik.com.webp'; // URL of the bonus image
  currentBet: number = 0.1;
  balance: number = 1000;
  win: number = 100;
  
  
  constructor(
    private modalService: BsModalService,
    public currencyPipe: CurrencyPipe
  ) {}

  
  openMenuDialog() {
    this.bsModalRef = this.modalService.show(HamburgerMenuDialogComponent);
  }

  openBuyFeatureModal() {
    this.bsModalRef = this.modalService.show(BuyFeatureButtonComponent, {
      initialState: {
        currentBet: this.currentBet,
        bonusImageUrl: this.bonusImageUrl,
      },
    });
  }
  
}

