import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CorridaService } from '../../../core/corrida.service';
import { Corrida } from '../../../models/corrida.model';

@Component({
  selector: 'app-corrida-edita',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './corrida-edita.component.html',
  styleUrl: './corrida-edita.component.scss',
})
export class CorridaEditaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private corridaService = inject(CorridaService);

  private id = this.route.snapshot.paramMap.get('id')!;

  form = this.fb.group({
    nome: ['', Validators.required],
    data: ['', Validators.required],
    local: ['', Validators.required],
    distanciasTexto: ['', Validators.required],
  });

  ngOnInit() {
    this.corridaService.findById(this.id).subscribe({
      next: (corrida) =>
        this.form.patchValue({
          nome: corrida.nome,
          data: corrida.data,
          local: corrida.local,
          distanciasTexto: corrida.distancias.join(', '),
        }),
      error: (erro) => console.error('Erro ao carregar corrida', erro),
    });
  }

  salvar() {
    if (this.form.invalid) return;

    const distancias = this.form.value
      .distanciasTexto!.split(',')
      .map((d) => parseFloat(d.trim()))
      .filter((d) => !isNaN(d));

    const corrida: Corrida = {
      id: this.id,
      nome: this.form.value.nome!,
      data: this.form.value.data!,
      local: this.form.value.local!,
      distancias,
    };

    this.corridaService.update(this.id, corrida).subscribe({
      next: () => this.router.navigate(['/corridas']),
      error: (erro) => console.error('Erro ao atualizar corrida', erro),
    });
  }
}
