import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  create(litre: number, carburant: string): Observable<any> {
    return this.http.post<any>(`${this.URI}/data`, { litre, carburant });
  }

  get(code: number): Observable<any> {
    return this.http.get<any>(`${this.URI}/data/${code}`);
  }

  update(code: number, litre: number, carburant: string): Observable<any> {
    return this.http.put<any>(`${this.URI}/data/${code}`, { litre, carburant });
  }

  delete(code: number): Observable<any> {
    return this.http.delete<any>(`${this.URI}/data/${code}`);
  }
}
