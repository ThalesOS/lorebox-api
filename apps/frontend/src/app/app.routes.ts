import { Routes } from '@angular/router';
import { CorredorFormComponent } from './features/corredor/corredor-novo/corredor-novo.component';
import { CorredorListComponent } from './features/corredor/corredor-lista/corredor-lista.component';
import { CorredorExibeComponent } from './features/corredor/corredor-exibe/corredor-exibe.component';
import { CorredorEditaComponent } from './features/corredor/corredor-edita/corredor-edita.component';

// SEUS NOVOS IMPORTS DA CORRIDA:
import { CorridaListaComponent } from './features/corrida/corrida-lista/corrida-lista.component';
import { CorridaNovoComponent } from './features/corrida/corrida-novo/corrida-novo.component';
import { CorridaExibeComponent } from './features/corrida/corrida-exibe/corrida-exibe.component';
import { CorridaEditaComponent } from './features/corrida/corrida-edita/corrida-edita.component';

export const routes: Routes = [
  // Rotas do Corredor (do seu colega)
  { path: 'corredores', component: CorredorListComponent },
  { path: 'corredores/novo', component: CorredorFormComponent },
  { path: 'corredores/:id', component: CorredorExibeComponent },
  { path: 'corredores/:id/editar', component: CorredorEditaComponent },

  // SUAS NOVAS ROTAS DA CORRIDA:
  { path: 'corridas', component: CorridaListaComponent },
  { path: 'corridas/novo', component: CorridaNovoComponent },
  { path: 'corridas/:id', component: CorridaExibeComponent },
  { path: 'corridas/:id/editar', component: CorridaEditaComponent },
];
