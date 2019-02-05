import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./componentes/login/login.component";
import {AdministradorComponent} from "./componentes/administrador/administrador.component";
import {RolesComponent} from "./componentes/roles/roles.component";
import {RegistroComponent} from "./componentes/registro/registro.component";
import {EventosComponent} from "./componentes/eventos/eventos.component";
import {Ruta404Component} from "./componentes/ruta404/ruta404.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'administrador',
    component: AdministradorComponent
  },
  {
    path: 'roles',
    component: RolesComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'no-encontrado',
    component: Ruta404Component
  },
  {
    path: '**',
    redirectTo: 'no-encontrado'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
