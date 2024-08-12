import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPlayButtonComponent } from './auto-play-button.component';

describe('AutoPlayButtonComponent', () => {
  let component: AutoPlayButtonComponent;
  let fixture: ComponentFixture<AutoPlayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoPlayButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AutoPlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
