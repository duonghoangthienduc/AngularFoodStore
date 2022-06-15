import { TestBed } from '@angular/core/testing';

import { CartOnlServiceService } from './cart-onl-service.service';

describe('CartOnlServiceService', () => {
  let service: CartOnlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartOnlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
