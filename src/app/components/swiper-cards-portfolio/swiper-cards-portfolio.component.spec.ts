import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCardsPortfolioComponent } from './swiper-cards-portfolio.component';

describe('SwiperCardsPortfolioComponent', () => {
  let component: SwiperCardsPortfolioComponent;
  let fixture: ComponentFixture<SwiperCardsPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwiperCardsPortfolioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperCardsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
