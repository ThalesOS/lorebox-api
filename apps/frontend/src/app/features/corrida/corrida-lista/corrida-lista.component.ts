import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CorridaService } from '../../../core/corrida.service';
import { Corrida } from '../../../models/• corrida.model';

@Component({
  selector: 'app-corrida-lista',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './corrida-lista.component.html',
  styleUrls: ['./corrida-lista.component.scss']
})
export class CorridaListaComponent implements OnInit {
  private corridaService = inject(CorridaService);

  corridas: Corrida[] = [];

  ngOnInit() {
    this.carregar();
  }

  carregar() {
    this.corridaService.findAll().subscribe({
      next: (dados) => this.corridas = dados,
      error: (erro) => console.error('Erro ao buscar corridas:', erro)
    });
  }

  deletar(id: string | undefined) {
    if (id && confirm('Tem certeza que deseja excluir esta corrida?')) {
      this.corridaService.delete(id).subscribe({
        next: () => this.carregar(),
        error: (erro) => console.error('Erro ao deletar corrida:', erro)
      });
    }
  }
}
