import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { adminAuthCanDeActivateGuard } from './admin-auth-can-de-activate.guard';

describe('adminAuthCanDeActivateGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => adminAuthCanDeActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
