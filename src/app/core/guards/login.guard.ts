import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const router: Router=inject(Router);
  const login = localStorage.getItem("login");
  if(login){
    router.navigate(['/dashboard/blog/list']).then();
    return false;
  }
  return true;
};
