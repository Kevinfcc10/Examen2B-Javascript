import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthService} from "./AuthService";

@Injectable()
export class EsAdministrador implements CanActivate {
  constructor(private readonly _authService: AuthService,
              private readonly _router: Router) {
  }

  canActivate(): boolean {
    if (this._authService.esAdministrador()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }

  }
}
