import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetOptionsComponent } from './bet-options.component';

describe('BetOptionsComponent', () => {
  let component: BetOptionsComponent;
  let fixture: ComponentFixture<BetOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BetOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
