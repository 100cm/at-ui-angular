import { TestBed, inject } from '@angular/core/testing';

import { AtModalService } from './at-modal.service';

describe('AtModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtModalService]
    });
  });

  it('should be created', inject([AtModalService], (service: AtModalService) => {
    expect(service).toBeTruthy();
  }));
});
