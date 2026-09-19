import { Routes } from '@angular/router';
import { CorredorFormComponent } from './features/corredor/corredor-novo/corredor-novo.component';
import { CorredorListComponent } from './features/corredor/corredor-lista/corredor-lista.component';
import { CorredorExibeComponent } from './features/corredor/corredor-exibe/corredor-exibe.component';
import { CorredorEditaComponent } from './features/corredor/corredor-edita/corredor-edita.component';

export const routes: Routes = [
  { path: 'corredores', component: CorredorListComponent },
  { path: 'corredores/novo', component: CorredorFormComponent },
  { path: 'corredores/:id', component: CorredorExibeComponent },
  { path: 'corredores/:id/editar', component: CorredorEditaComponent },
];
