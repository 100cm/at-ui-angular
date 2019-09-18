import { TestBed } from '@angular/core/testing';

import { AtSelectControlService } from './at-select-control.service';

describe('AtSelectControlService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [AtSelectControlService]
  }));

  it('should be created', () => {
    const service: AtSelectControlService = TestBed.get(AtSelectControlService);
    expect(service).toBeTruthy();
  });
});
