import { Component } from '@angular/core';
import { BetOptionsComponent } from '../components/bet-options/bet-options.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HamburgerMenuDialogComponent } from '../components/hamburger-menu/hamburger-menu.component';
import { BuyFeatureButtonComponent } from '../components/buy-feature-button/buy-feature-button.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [BetOptionsComponent],
  providers: [BsModalService],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  bsModalRef?: BsModalRef;
  bonusImageUrl: string =
    'https://logowik.com/content/uploads/images/free-vector-egyptian-pyramids-with-sphinxsilhouette5248.logowik.com.webp'; // URL of the bonus image
  currentBet: number = 0;

  constructor(private modalService: BsModalService) {}

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
