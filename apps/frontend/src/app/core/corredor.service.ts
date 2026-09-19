import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Corredor } from '../models/corredor.model';

@Injectable({ providedIn: 'root' })
export class CorredorService {
  private readonly apiUrl = 'http://localhost:8080/api/corredores';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Corredor[]>(this.apiUrl);
  }

  findById(id: string) {
    return this.http.get<Corredor>(`${this.apiUrl}/${id}`);
  }

  create(corredor: Corredor) {
    return this.http.post<Corredor>(this.apiUrl, corredor);
  }

  update(id: string, corredor: Corredor) {
    return this.http.put<Corredor>(`${this.apiUrl}/${id}`, corredor);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
