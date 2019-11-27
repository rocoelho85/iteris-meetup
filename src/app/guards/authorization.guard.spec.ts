import { TestBed, async, inject } from '@angular/core/testing';

import { AuthorizationGuard } from './authorization.guard';
import { HttpClientModule } from '@angular/common/http';

describe('AutorizationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorizationGuard],
      imports: [HttpClientModule]
    });
  });

  it('should ...', inject([AuthorizationGuard], (guard: AuthorizationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
