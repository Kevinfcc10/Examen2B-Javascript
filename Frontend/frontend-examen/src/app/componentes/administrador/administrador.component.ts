import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  sales: any[];
  cols: any[];

  ngOnInit() {
    this.cols = [
      { field: 'nombre', header: 'Nombre' },
      { field: 'correo', header: 'Correo' },
      { field: 'nacimiento', header: 'Fecha nacimiento' },
      { field: 'acciones', header: 'Acciones' }
    ];

    this.sales = [
      { nombre: 'Apple', correo: '51%', nacimiento: '40%'},
      { nombre: 'Samsung', correo: '83%', nacimiento: '96%'},
      { nombre: 'Microsoft', correo: '38%', nacimiento: '5%'},
      { nombre: 'Philips', correo: '49%', nacimiento: '22%'},
      { nombre: 'Song', correo: '17%', nacimiento: '79%' },
    ];

  }

  irRoles(){
    this._router.navigate(['/roles']);
  }

  eliminar(){

  }

}
