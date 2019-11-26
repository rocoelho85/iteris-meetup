import { TestBed } from '@angular/core/testing';

import { MeetupService } from './meetup.service';

describe('MeetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeetupService = TestBed.get(MeetupService);
    expect(service).toBeTruthy();
  });
});
