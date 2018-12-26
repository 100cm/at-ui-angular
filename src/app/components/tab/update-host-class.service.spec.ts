import { TestBed } from '@angular/core/testing';

import { UpdateHostClassService } from './update-host-class.service';

describe('UpdateHostClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateHostClassService = TestBed.get(UpdateHostClassService);
    expect(service).toBeTruthy();
  });
});
