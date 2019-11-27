import { TestBed } from '@angular/core/testing';

import { MeetupService } from './meetup.service';
import { HttpClientModule } from '@angular/common/http';

describe('MeetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule]
  }));

  it('should be created', () => {
    const service: MeetupService = TestBed.get(MeetupService);
    expect(service).toBeTruthy();
  });
});
