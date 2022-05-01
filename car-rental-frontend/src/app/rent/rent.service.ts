import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ErrorHandlerService } from '../core/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  rentUrl: string;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {
    this.rentUrl = `${environment.apiUrl}/cars`;
  }

  pesquisar(filtro: any): Observable<any> {
    return this.http.get<any>(`${this.rentUrl}?model=${filtro.model}`)
      .pipe(
        catchError(error => {
          throw this.errorHandler.handle(error);
        })
      );
  }

}
