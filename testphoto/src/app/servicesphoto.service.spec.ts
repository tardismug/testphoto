import { TestBed } from '@angular/core/testing';

import { ServicesphotoService } from './servicesphoto.service';

describe('ServicesphotoService', () => {
  let service: ServicesphotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesphotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
