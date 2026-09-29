import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { InscricaoService } from '../../../core/inscricao.service';
import { CorredorService } from '../../../core/corredor.service';
import { Inscricao } from '../../../models/inscricao.model';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-inscricao-edita',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './inscricao-edita.component.html',
  styleUrl: './inscricao-edita.component.scss',
})
export class InscricaoEditaComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private inscricaoService = inject(InscricaoService);
  private corredorService = inject(CorredorService);

  private id = this.route.snapshot.paramMap.get('id')!;

  corredores: Corredor[] = [];
  corridas: any[] = [];

  form = this.fb.group({
    corredorId: ['', Validators.required],
    corridaId: ['', Validators.required],
    distanciaEscolhida: [5, [Validators.required, Validators.min(0.1)]],
    status: ['PENDENTE', Validators.required],
  });

  ngOnInit() {
    this.corredorService.findAll().subscribe((res) => (this.corredores = res));
    this.http.get<any[]>('http://localhost:8080/api/corridas').subscribe((res) => (this.corridas = res));

    this.inscricaoService.findById(this.id).subscribe({
      next: (inscricao) => this.form.patchValue(inscricao),
      error: (err) => console.error('Erro ao carregar inscrição', err.error),
    });
  }

  salvar() {
    if (this.form.invalid) return;

    const data: Inscricao = {
      id: this.id,
      corredorId: this.form.value.corredorId!,
      corridaId: this.form.value.corridaId!,
      distanciaEscolhida: Number(this.form.value.distanciaEscolhida),
      status: this.form.value.status as 'PENDENTE' | 'PAGO' | 'CANCELADO',
    };

    this.inscricaoService.update(this.id, data).subscribe({
      next: () => this.router.navigate(['/inscricoes']),
      error: (err) => console.error('Erro ao atualizar inscrição', err.error),
    });
  }
}
