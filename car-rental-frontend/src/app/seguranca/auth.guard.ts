import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // // verificar se pode dar problema ao colocar '/auto-cadastro'
    // if ((state.url === '/login' || state.url.substring(0, 16) === '/recuperar-senha') && this.auth.isAccessTokenInvalid()) {
    //   return true;
    // } else if ((state.url === '/login' || state.url.substring(0, 16) === '/recuperar-senha') && !this.auth.isAccessTokenInvalid()) {
    //   return this.auth.obterNovoAccessToken()
    //     .then(() => {
    //       if (!this.auth.isAccessTokenInvalid()) {
    //         this.router.navigate(['/pagina-nao-encontradas']); // verificar se tem como voltar para onde estava
    //         return false;
    //       }
    //       return true;
    //     });
    // } else

    // if (this.auth.isAccessTokenInvalid()) {
    //   console.log('Navegação com access token inválida. Obtendo no token...');

    //   return this.auth.obterNovoAccessToken()
    //     .then(() => {
    //       if (this.auth.isAccessTokenInvalid()) {
    //         this.router.navigate(['/login']);
    //         return false;
    //       }

    //       return true;
    //     });
    // } else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
    //   this.router.navigate(['/nao-autorizado']);
    //   return false;
    // }

    return true;
  }

}
