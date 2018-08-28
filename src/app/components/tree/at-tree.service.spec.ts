import { TestBed, inject } from '@angular/core/testing';

import { AtTreeService } from './at-tree.service';

describe('AtTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtTreeService]
    });
  });

  it('should be created', inject([AtTreeService], (service: AtTreeService) => {
    expect(service).toBeTruthy();
  }));
});
