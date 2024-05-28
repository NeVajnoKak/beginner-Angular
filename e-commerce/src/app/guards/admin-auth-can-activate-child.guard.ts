import { CanActivateChildFn } from '@angular/router';

export const adminAuthCanActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
