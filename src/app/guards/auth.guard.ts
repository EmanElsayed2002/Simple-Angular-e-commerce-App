import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLogged: boolean = !!localStorage.getItem('user');
  if (isLogged) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
