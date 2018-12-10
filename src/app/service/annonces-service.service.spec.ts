import { TestBed } from '@angular/core/testing';

import { AnnoncesService } from './annonces-service.service';

describe('AnnoncesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnnoncesService = TestBed.get(AnnoncesService);
    expect(service).toBeTruthy();
  });
});
