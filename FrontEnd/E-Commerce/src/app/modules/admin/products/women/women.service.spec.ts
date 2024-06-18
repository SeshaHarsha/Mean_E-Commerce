import { TestBed } from '@angular/core/testing';

import { WomenService } from './womenservice';

describe('WomenService', () => {
  let service: WomenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WomenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
