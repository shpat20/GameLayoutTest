import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-hamburger-menu-dialog',
  standalone: true,
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuDialogComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closeDialog() {
    this.bsModalRef.hide();
  }
}
