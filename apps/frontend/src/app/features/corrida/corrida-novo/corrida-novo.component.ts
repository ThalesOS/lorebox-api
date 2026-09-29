import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CorridaService } from '../../../core/corrida.service';
import { Corrida } from '../../../models/corrida.model';

@Component({
  selector: 'app-corrida-novo',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './corrida-novo.component.html',
  styleUrl: './corrida-novo.component.scss',
})
export class CorridaNovoComponent {
  private fb = inject(FormBuilder);
  private corridaService = inject(CorridaService);
  private router = inject(Router);

  form = this.fb.group({
    nome: ['', Validators.required],
    data: ['', Validators.required],
    local: ['', Validators.required],
    distanciasTexto: ['', Validators.required],
  });

  salvar() {
    if (this.form.invalid) return;

    const distancias = this.form.value
      .distanciasTexto!.split(',')
      .map((d) => parseFloat(d.trim()))
      .filter((d) => !isNaN(d));

    const corrida: Corrida = {
      nome: this.form.value.nome!,
      data: this.form.value.data!,
      local: this.form.value.local!,
      distancias,
    };

    this.corridaService.create(corrida).subscribe({
      next: () => this.router.navigate(['/corridas']),
      error: (erro) => console.error('Erro ao salvar corrida:', erro),
    });
  }
}
