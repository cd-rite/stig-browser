import { TestBed } from '@angular/core/testing';

import { StigListService } from './stig-list.service';

describe('StigListService', () => {
  let service: StigListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StigListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
