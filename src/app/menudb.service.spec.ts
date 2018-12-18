import { TestBed, inject } from '@angular/core/testing';

import { MenudbService } from './menudb.service';

describe('MenudbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenudbService]
    });
  });

  it('should be created', inject([MenudbService], (service: MenudbService) => {
    expect(service).toBeTruthy();
  }));
});
