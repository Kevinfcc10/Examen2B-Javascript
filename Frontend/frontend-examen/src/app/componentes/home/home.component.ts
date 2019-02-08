import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  items: MenuItem[] = [
    {
      label: 'Administrador',
      icon: 'pi pi-user',
      routerLink: '/home/administrador',
      disabled: !VariablesGlobales.isAdministrator,
      id: 'menuAdmin'
    },
    {
      label: 'Usuario',
      icon: 'pi pi-users',
      routerLink: '/home/usuario',
      disabled: !VariablesGlobales.isUser,
      id: 'menuUser'
    },
    {
      label: 'Eventos',
      icon: 'pi pi-tag',
      routerLink: '/home/eventos',
      disabled: false,
      id: 'menuEvent',
    }
  ];

  ngOnInit() {
    if(VariablesGlobales.isAdministrator && VariablesGlobales.isUser){
      this.items;
    }
    else{
      if (VariablesGlobales.isUser){
        this.items.splice(0,1);
      }
      else {
        if(VariablesGlobales.isAdministrator){
          this.items.splice(1,1);
        }
      }
    }
  }

  cerrarSesion(){
    VariablesGlobales.isUser = false;
    VariablesGlobales.isAdministrator = false;
    VariablesGlobales.idStudent = -1;
    VariablesGlobales.idUser = -1;
    this._router.navigate(['/login'])
  }
}
