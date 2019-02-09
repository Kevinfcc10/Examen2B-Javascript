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
import {CalendarModule, InputTextModule, MultiSelectModule, PasswordModule} from "primeng/primeng";
import {ButtonModule} from "primeng/button";
import { HomeComponent } from './componentes/home/home.component';
import {MenubarModule} from "primeng/menubar";
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { InformacionEventoComponent } from './componentes/informacion-evento/informacion-evento.component';
import { AtributosMateriaComponent } from './componentes/atributos-materia/atributos-materia.component';
import { MateriaComponent } from './componentes/materia/materia.component';
import { EstudianteComponent } from './componentes/estudiante/estudiante.component';
import {UsuarioService} from "./componentes/servicios/usuario-service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EstudianteService} from "./componentes/servicios/estudiante-service";
import { NuevoEventoComponent } from './componentes/nuevo-evento/nuevo-evento.component';
import {EsAdministrador} from "./componentes/servicios/EsAdministrador ";
import {AuthService} from "./componentes/servicios/AuthService";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    RolesComponent,
    RegistroComponent,
    EventosComponent,
    Ruta404Component,
    HomeComponent,
    UsuarioComponent,
    InformacionEventoComponent,
    AtributosMateriaComponent,
    MateriaComponent,
    EstudianteComponent,
    NuevoEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    MenubarModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UsuarioService, EstudianteService, EsAdministrador, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
