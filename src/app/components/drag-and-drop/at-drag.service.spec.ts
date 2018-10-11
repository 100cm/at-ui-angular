import { TestBed, inject } from '@angular/core/testing';

import { AtDragService } from './at-drag.service';

describe('AtDragService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtDragService]
    });
  });

  it('should be created', inject([AtDragService], (service: AtDragService) => {
    expect(service).toBeTruthy();
  }));
});
