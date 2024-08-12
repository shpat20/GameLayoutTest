import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOptionsModalComponent } from './bet-options-modal.component';

describe('BetOptionsModalComponent', () => {
  let component: BetOptionsModalComponent;
  let fixture: ComponentFixture<BetOptionsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetOptionsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetOptionsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
