import { Routes } from '@angular/router';
import { CorredorListComponent } from './features/corredor/corredor-lista/corredor-lista.component';
import { CorredorFormComponent } from './features/corredor/corredor-novo/corredor-novo.component';
import { CorredorExibeComponent } from './features/corredor/corredor-exibe/corredor-exibe.component';
import { CorredorEditaComponent } from './features/corredor/corredor-edita/corredor-edita.component';

import { InscricaoListaComponent } from './features/inscricao/inscricao-lista/inscricao-lista.component';
import { InscricaoNovoComponent } from './features/inscricao/inscricao-novo/inscricao-novo.component';
import { InscricaoExibeComponent } from './features/inscricao/inscricao-exibe/inscricao-exibe.component';
import { InscricaoEditaComponent } from './features/inscricao/inscricao-edita/inscricao-edita.component';

export const routes: Routes = [
  { path: '', redirectTo: 'corredores', pathMatch: 'full' },
  { path: 'corredores', component: CorredorListComponent },
  { path: 'corredores/novo', component: CorredorFormComponent },
  { path: 'corredores/:id', component: CorredorExibeComponent },
  { path: 'corredores/:id/editar', component: CorredorEditaComponent },

  { path: 'inscricoes', component: InscricaoListaComponent },
  { path: 'inscricoes/novo', component: InscricaoNovoComponent },
  { path: 'inscricoes/:id', component: InscricaoExibeComponent },
  { path: 'inscricoes/:id/editar', component: InscricaoEditaComponent },
];
