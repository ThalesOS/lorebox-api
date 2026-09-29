import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CorridaService } from '../../../core/corrida.service';
import { Corrida } from '../../../models/corrida.model';

@Component({
  selector: 'app-corrida-novo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './corrida-novo.component.html',
  styleUrls: ['./corrida-novo.component.scss']
})
export class CorridaNovoComponent {
  private corridaService = inject(CorridaService);
  private router = inject(Router);

  // Objeto que vai espelhar os campos do formulário HTML
  corrida: Corrida = {
    nome: '',
    data: '',
    local: '',
    distancias: []
  };

  // Campo auxiliar para ler as distâncias separadas por vírgula no formulário
  distanciasTexto: string = '';

  salvar() {
    // Transforma o texto de distâncias (ex: "5, 10, 21") em um array de números [5, 10, 21]
    if (this.distanciasTexto) {
      this.corrida.distancias = this.distanciasTexto
        .split(',')
        .map(d => parseFloat(d.trim()))
        .filter(d => !isNaN(d));
    }

    this.corridaService.create(this.corrida).subscribe({
      next: () => {
        alert('Corrida cadastrada com sucesso!');
        this.router.navigate(['/corridas']); // Volta para a listagem
      },
      error: (erro) => console.error('Erro ao salvar corrida:', erro)
    });
  }
}
