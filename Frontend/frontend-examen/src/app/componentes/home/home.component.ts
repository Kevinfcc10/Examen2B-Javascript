import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";
import {VariablesGlobales} from "../servicios/variablesGlobales";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

}
