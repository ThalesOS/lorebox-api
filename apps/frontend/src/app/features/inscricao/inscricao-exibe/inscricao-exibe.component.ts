import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InscricaoService } from '../../../core/inscricao.service';
import { CorredorService } from '../../../core/corredor.service';
import { Inscricao } from '../../../models/inscricao.model';

@Component({
  selector: 'app-inscricao-exibe',
  imports: [RouterLink],
  templateUrl: './inscricao-exibe.component.html',
  styleUrl: './inscricao-exibe.component.scss',
})
export class InscricaoExibeComponent implements OnInit {
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private inscricaoService = inject(InscricaoService);
  private corredorService = inject(CorredorService);

  inscricao?: Inscricao;
  corredorNome = '';
  corridaNome = '';

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.inscricaoService.findById(id).subscribe({
      next: (inscricao) => {
        this.inscricao = inscricao;
        if (inscricao.corredorId) {
          this.corredorService.findById(inscricao.corredorId).subscribe({
            next: (c) => (this.corredorNome = c.nome),
          });
        }
        if (inscricao.corridaId) {
          this.http.get<any>(`http://localhost:8080/api/corridas/${inscricao.corridaId}`).subscribe({
            next: (c) => (this.corridaNome = c.nome),
          });
        }
      },
      error: (err) => console.error('Erro ao carregar inscrição', err.error),
    });
  }
}
