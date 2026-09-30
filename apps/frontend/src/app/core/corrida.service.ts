import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corrida } from '../models/corrida.model';

@Injectable({ providedIn: 'root' })
export class CorridaService {
  private readonly apiUrl = 'http://localhost:8080/api/corridas';

  constructor(private http: HttpClient) {}

  findAll(): Observable<Corrida[]> {
    return this.http.get<Corrida[]>(this.apiUrl);
  }

  findById(id: string): Observable<Corrida> {
    return this.http.get<Corrida>(`${this.apiUrl}/${id}`);
  }

  create(corrida: Corrida): Observable<Corrida> {
    return this.http.post<Corrida>(this.apiUrl, corrida);
  }

  update(id: string, corrida: Corrida): Observable<Corrida> {
    return this.http.put<Corrida>(`${this.apiUrl}/${id}`, corrida);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
