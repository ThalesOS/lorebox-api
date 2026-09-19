import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CorredorService } from '../../../core/corredor.service';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-corredor-exibe',
  imports: [RouterLink],
  templateUrl: './corredor-exibe.component.html',
  styleUrl: './corredor-exibe.component.scss',
})
export class CorredorExibeComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private corredorService = inject(CorredorService);

  corredor?: Corredor;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.corredorService.findById(id).subscribe({
      next: (corredor) => (this.corredor = corredor),
      error: (err) => console.error('Erro ao carregar corredor', err.error),
    });
  }
}
