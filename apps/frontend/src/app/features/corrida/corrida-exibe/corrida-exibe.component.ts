import { Component, inject, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CorridaService } from '../../../core/corrida.service';
import { Corrida } from '../../../models/corrida.model';

@Component({
  selector: 'app-corrida-exibe',
  imports: [RouterLink, DatePipe],
  templateUrl: './corrida-exibe.component.html',
  styleUrl: './corrida-exibe.component.scss',
})
export class CorridaExibeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private corridaService = inject(CorridaService);

  corrida?: Corrida;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.corridaService.findById(id).subscribe({
      next: (corrida) => (this.corrida = corrida),
      error: (erro) => console.error('Erro ao carregar corrida', erro),
    });
  }
}
