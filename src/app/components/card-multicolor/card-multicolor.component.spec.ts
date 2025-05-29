import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMulticolorComponent } from './card-multicolor.component';

describe('CardMulticolorComponent', () => {
  let component: CardMulticolorComponent;
  let fixture: ComponentFixture<CardMulticolorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMulticolorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMulticolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
