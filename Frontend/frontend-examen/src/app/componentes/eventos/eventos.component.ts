import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {EstudianteService} from "../servicios/estudiante-service";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventosAux: any[]=[]
  estadoEventos
  constructor(
    private _router: Router,
    private _studentService: EstudianteService,
  ) { }


  cols: any[] = [
    { field: 'nombre', header: 'Nombre Evento' },
    { field: 'fecha', header: 'Fecha' },
    { field: 'acciones', header: 'Acciones' }
  ];

  ngOnInit() {
    if(this.estadoEventos == false){
      console.log('estado igual falso')
    }
    else {
      if(VariablesGlobales.idUser > 0){
        this.obtenerEventos();
      }
    }
  }

  irRoles(eventito: NuevoEvento){

    let parametros: NavigationExtras  = {
      queryParams: {
        id: eventito.id,
        nombre: eventito.nombre,
        //fecha: eventito.fecha
      }
    }
    console.log(eventito)

    this._router.navigate(['/ver'],parametros);
  }

  capturarInformacion(){
    this.estadoEventos = true;
    this.ngOnInit();
  }

  obtenerEventos(){
    this.eventosAux = []
    const obsevable$ = this._studentService.obternerEventos();
    obsevable$.subscribe(
      (resultado:any)=>{
        console.log(resultado)
        for (let i in resultado){
          let valor: NuevoEvento = {
            nombre: resultado[i].nombre_evento,
            fecha: resultado[i].fecha_evento,
            id: resultado[i].id,
          }
          this.eventosAux.push(valor);
        }
      }
    )
  }

}

export interface NuevoEvento {
  nombre:string,
  fecha:string,
  id?:number
}
