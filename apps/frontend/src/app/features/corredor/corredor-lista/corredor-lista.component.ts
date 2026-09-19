import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CorredorService } from '../../../core/corredor.service';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-corredor-lista',
  imports: [RouterLink],
  templateUrl: './corredor-lista.component.html',
  styleUrl: './corredor-lista.component.scss',
})
export class CorredorListComponent implements OnInit {
  private corredorService = inject(CorredorService);

  corredores: Corredor[] = [];

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.corredorService.findAll().subscribe({
      next: (corredores) => (this.corredores = corredores),
      error: (err) => console.error('Erro ao carregar corredores', err.error),
    });
  }

  excluir(id: string) {
    if (!confirm('Deseja realmente excluir este corredor?')) return;

    this.corredorService.delete(id).subscribe({
      next: () => this.carregar(),
      error: (err) => console.error('Erro ao excluir corredor', err.error),
    });
  }
}
