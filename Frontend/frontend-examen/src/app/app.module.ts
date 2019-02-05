import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { RolesComponent } from './componentes/roles/roles.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { Ruta404Component } from './componentes/ruta404/ruta404.component';
import {InputTextModule} from "primeng/primeng";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    RolesComponent,
    RegistroComponent,
    EventosComponent,
    Ruta404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
