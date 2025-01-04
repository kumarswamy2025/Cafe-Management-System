import { TestBed } from '@angular/core/testing';

import { TokenInterceptroInterceptor } from './token-interceptro.interceptor';

describe('TokenInterceptroInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TokenInterceptroInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TokenInterceptroInterceptor = TestBed.inject(TokenInterceptroInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
