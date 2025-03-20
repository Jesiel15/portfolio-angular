import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSwiperComponent } from './slide-swiper.component';

describe('SlideSwiperComponent', () => {
  let component: SlideSwiperComponent;
  let fixture: ComponentFixture<SlideSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SlideSwiperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
