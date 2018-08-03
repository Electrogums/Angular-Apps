import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {UsuarioComponent} from './components/usuario/usuario.component';
import {UsuarioDetalleComponent} from './components/usuario/usuario-detalle.component';
import {UsuarioEditareComponent} from './components/usuario/usuario-editare.component';
import {UsuarioNuevoComponent} from './components/usuario/usuario-nuevo.component';
import {USUARIO_ROUTES} from './components/usuario/usuario.routes';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
