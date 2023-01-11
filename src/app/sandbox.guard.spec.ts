import { TestBed } from '@angular/core/testing';

import { SandboxGuard } from './sandbox.guard';

describe('SandboxGuard', () => {
  let guard: SandboxGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SandboxGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
