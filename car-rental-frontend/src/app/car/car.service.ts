import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Car } from '../core/model';
import { environment } from '../../environments/environment';
import { ErrorHandlerService } from '../core/error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  carUrl: string;

  constructor(
    private http: HttpClient,
    private errorHandler: ErrorHandlerService
  ) {
    this.carUrl = `${environment.apiUrl}/cars`;
  }

  pesquisar(filtro: any): Observable<any> {
    let params = new HttpParams();

    // if (filtro.nome !== null) {
    //   params = params.append('nome', filtro.nome);
    // }

    // if (filtro.tipo !== 'null') {
    //   params = params.append('tipo', filtro.tipo);
    // }

    return this.http.get<any>(this.carUrl)
      .pipe(
        catchError(error => {
          throw this.errorHandler.handle(error);
        })
      );
  }

  salvar(car: Car): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<Car>(this.carUrl, JSON.stringify(car), { headers })
      .pipe(
        catchError(error => {
          throw this.errorHandler.handle(error);
        })
      );
  }

  atualizar(car: Car): Observable<Car> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.put<Car>(`${this.carUrl}/${car.id}`, JSON.stringify(car), { headers })
      .pipe(
        catchError(error => {
          throw this.errorHandler.handle(error);
        })
      );
  }

  buscarCarPorCodigo(codigo: number): Observable<Car> {
    return this.http.get<Car>(`${this.carUrl}/${codigo}`)
      .pipe(
        catchError(error => {
          throw this.errorHandler.handle(error);
        })
      );
  }

  excluir(codigo: number): Observable<any> {
    return this.http.delete(`${this.carUrl}/${codigo}`)
      .pipe(
        catchError((err) => {
          throw this.errorHandler.handle(err);
        })
      );
  }

}
