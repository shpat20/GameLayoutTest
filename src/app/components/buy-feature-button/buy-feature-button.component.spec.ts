import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyFeatureButtonComponent } from './buy-feature-button.component';

describe('BuyFeatureButtonComponent', () => {
  let component: BuyFeatureButtonComponent;
  let fixture: ComponentFixture<BuyFeatureButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyFeatureButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyFeatureButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
