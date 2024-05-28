import { CanDeactivateFn } from '@angular/router';

export const adminAuthCanDeActivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
