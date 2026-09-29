import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscricao } from '../models/inscricao.model';

@Injectable({ providedIn: 'root' })
export class InscricaoService {
  private readonly apiUrl = 'http://localhost:8080/api/inscricoes';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Inscricao[]>(this.apiUrl);
  }

  findById(id: string) {
    return this.http.get<Inscricao>(`${this.apiUrl}/${id}`);
  }

  create(inscricao: Inscricao) {
    return this.http.post<Inscricao>(this.apiUrl, inscricao);
  }

  update(id: string, inscricao: Inscricao) {
    return this.http.put<Inscricao>(`${this.apiUrl}/${id}`, inscricao);
  }

  delete(id: string) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
