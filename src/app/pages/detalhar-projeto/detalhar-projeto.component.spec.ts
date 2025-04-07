import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharProjetoComponent } from './detalhar-projeto.component';

describe('DetalharProjetoComponent', () => {
  let component: DetalharProjetoComponent;
  let fixture: ComponentFixture<DetalharProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalharProjetoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalharProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
