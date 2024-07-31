import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router=inject(Router);
  const login = localStorage.getItem("login");
  if(!login){
    router.navigate(['/auth/login']).then();
    return false;
  }
  return true;
};
