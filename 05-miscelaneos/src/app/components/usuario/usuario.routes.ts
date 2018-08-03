import { Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo.component';
import { UsuarioEditareComponent } from './usuario-editare.component';
import { UsuarioDetalleComponent } from './usuario-detalle.component';


export const USUARIO_ROUTES: Routes = [
  {path: 'nuevo', component: UsuarioNuevoComponent},
  {path: 'editar', component: UsuarioEditareComponent},
  {path: 'detalle', component: UsuarioDetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'nuevo' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];
