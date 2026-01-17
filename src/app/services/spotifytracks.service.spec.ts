import { TestBed } from '@angular/core/testing';

import { SpotifytracksService } from './spotifytracks.service';

describe('SpotifytracksService', () => {
  let service: SpotifytracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotifytracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
