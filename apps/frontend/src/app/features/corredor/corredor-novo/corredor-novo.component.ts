import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CorredorService } from '../../../core/corredor.service';
import { Corredor } from '../../../models/corredor.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-corredor-novo',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './corredor-novo.component.html',
  styleUrl: './corredor-novo.component.scss',
})
export class CorredorFormComponent {
  private fb = inject(FormBuilder);
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
      next: () => console.log('Corredor cadastrado com sucesso'),
      error: (err) => console.error('Erro ao cadastrar', err.error), // err.error = ErrorResponse do GlobalExceptionHandler
    });
  }
}
