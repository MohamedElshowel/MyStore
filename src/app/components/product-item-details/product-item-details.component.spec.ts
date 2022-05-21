import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { ProductItemDetailsComponent } from './product-item-details.component';

describe('ProductItemDetailsComponent', () => {
  let component: ProductItemDetailsComponent;
  let fixture: ComponentFixture<ProductItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductItemDetailsComponent],
      providers: [HttpClient, HttpHandler],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
