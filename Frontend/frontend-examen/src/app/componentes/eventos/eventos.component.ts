import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  sales: any[];
  cols: any[];

  ngOnInit() {

    this.cols = [
      { field: 'nombre', header: 'Nombre Evento' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'acciones', header: 'Acciones' }
    ];

    this.sales = [
      { nombre: 'Apple', fecha: '40%'},
      { nombre: 'Samsung', fecha: '96%'},
      { nombre: 'Microsoft', fecha: '5%'},
      { nombre: 'Philips', fecha: '22%'},
      { nombre: 'Song', fecha: '79%' },
    ];

  }

  irRoles(){
    this._router.navigate(['/ver']);
  }

  eliminar(){

  }

}
