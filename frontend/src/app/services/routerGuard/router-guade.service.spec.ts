import { TestBed } from '@angular/core/testing';

import { RouterGuadeService } from './router-guade.service';

describe('RouterGuadeService', () => {
  let service: RouterGuadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouterGuadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
