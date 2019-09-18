import { Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { AtUpdateHostClassService } from './update-host-class.service';

describe('UpdateHostClassService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [ AtUpdateHostClassService, Renderer2 ]
  }));

  it('should be created', () => {
    const service: AtUpdateHostClassService = TestBed.get(AtUpdateHostClassService);
    expect(service).toBeTruthy();
  });
});
