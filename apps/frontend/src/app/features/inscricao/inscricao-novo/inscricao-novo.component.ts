import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { InscricaoService } from '../../../core/inscricao.service';
import { CorredorService } from '../../../core/corredor.service';
import { Inscricao } from '../../../models/inscricao.model';
import { Corredor } from '../../../models/corredor.model';

@Component({
  selector: 'app-inscricao-novo',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './inscricao-novo.component.html',
  styleUrl: './inscricao-novo.component.scss',
})
export class InscricaoNovoComponent implements OnInit {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private router = inject(Router);
  private inscricaoService = inject(InscricaoService);
  private corredorService = inject(CorredorService);

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
  }

  salvar() {
    if (this.form.invalid) return;

    const data: Inscricao = {
      corredorId: this.form.value.corredorId!,
      corridaId: this.form.value.corridaId!,
      distanciaEscolhida: Number(this.form.value.distanciaEscolhida),
      status: this.form.value.status as 'PENDENTE' | 'PAGO' | 'CANCELADO',
    };

    this.inscricaoService.create(data).subscribe({
      next: () => this.router.navigate(['/inscricoes']),
      error: (err) => console.error('Erro ao cadastrar inscrição', err.error),
    });
  }
}
