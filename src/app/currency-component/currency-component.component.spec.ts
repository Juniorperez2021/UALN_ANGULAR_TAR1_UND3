import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyComponentComponent } from './currency-component.component';

describe('CurrencyComponentComponent', () => {
  let component: CurrencyComponentComponent;
  let fixture: ComponentFixture<CurrencyComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyComponentComponent]
    });
    fixture = TestBed.createComponent(CurrencyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
