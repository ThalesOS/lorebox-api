import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CorredorService } from '../../../core/corredor.service';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-corredor-novo',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './corredor-novo.component.html',
  styleUrl: './corredor-novo.component.scss',
})
export class CorredorFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private corredorService = inject(CorredorService);

  form = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    genero: ['', Validators.required],
  });

  salvar() {
    if (this.form.invalid) return;
    this.corredorService.create(this.form.value as Corredor).subscribe({
      next: () => this.router.navigate(['/corredores']),
      error: (err) => console.error('Erro ao cadastrar', err.error),
    });
  }
}
