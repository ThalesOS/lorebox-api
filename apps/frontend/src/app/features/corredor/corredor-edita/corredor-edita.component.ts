import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CorredorService } from '../../../core/corredor.service';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-corredor-edita',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './corredor-edita.component.html',
  styleUrl: './corredor-edita.component.scss',
})
export class CorredorEditaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private corredorService = inject(CorredorService);

  private id = this.route.snapshot.paramMap.get('id')!;

  form = this.fb.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    dataNascimento: ['', Validators.required],
    genero: ['', Validators.required],
  });

  ngOnInit() {
    this.corredorService.findById(this.id).subscribe({
      next: (corredor) => this.form.patchValue(corredor),
      error: (err) => console.error('Erro ao carregar corredor', err.error),
    });
  }

  salvar() {
    if (this.form.invalid) return;
    this.corredorService.update(this.id, this.form.value as Corredor).subscribe({
      next: () => this.router.navigate(['/corredores']),
      error: (err) => console.error('Erro ao atualizar', err.error),
    });
  }
}
