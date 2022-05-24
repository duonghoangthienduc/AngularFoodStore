import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeProductComponent } from './swipe-product.component';

describe('SwipeProductComponent', () => {
  let component: SwipeProductComponent;
  let fixture: ComponentFixture<SwipeProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
