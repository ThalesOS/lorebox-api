import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { InscricaoService } from '../../../core/inscricao.service';
import { CorredorService } from '../../../core/corredor.service';
import { Inscricao } from '../../../models/inscricao.model';

@Component({
  selector: 'app-inscricao-lista',
  imports: [RouterLink],
  templateUrl: './inscricao-lista.component.html',
  styleUrl: './inscricao-lista.component.scss',
})
export class InscricaoListaComponent implements OnInit {
  private http = inject(HttpClient);
  private inscricaoService = inject(InscricaoService);
  private corredorService = inject(CorredorService);

  inscricoes: Inscricao[] = [];
  corredoresMap = new Map<string, string>();
  corridasMap = new Map<string, string>();

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.corredorService.findAll().subscribe((list) => {
      list.forEach((c) => this.corredoresMap.set(c.id!, c.nome));
    });

    this.http.get<any[]>('http://localhost:8080/api/corridas').subscribe((list) => {
      list.forEach((c) => this.corridasMap.set(c.id, c.nome));
    });

    this.inscricaoService.findAll().subscribe({
      next: (inscricoes) => (this.inscricoes = inscricoes),
      error: (err) => console.error('Erro ao carregar inscrições', err.error),
    });
  }

  getCorredorNome(id: string): string {
    return this.corredoresMap.get(id) || id;
  }

  getCorridaNome(id: string): string {
    return this.corridasMap.get(id) || id;
  }

  excluir(id: string) {
    if (!confirm('Deseja realmente excluir esta inscrição?')) return;

    this.inscricaoService.delete(id).subscribe({
      next: () => this.carregar(),
      error: (err) => console.error('Erro ao excluir inscrição', err.error),
    });
  }
}
