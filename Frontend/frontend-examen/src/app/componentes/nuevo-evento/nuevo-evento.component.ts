import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/internal/operators";
import {ActivatedRoute, Router} from "@angular/router";
import {EventoInterface} from "../servicios/usuario-service";
import {EstudianteService} from "../servicios/estudiante-service";

@Component({
  selector: 'app-nuevo-evento',
  templateUrl: './nuevo-evento.component.html',
  styleUrls: ['./nuevo-evento.component.css']
})
export class NuevoEventoComponent implements OnInit {

  idMateria1
  idEvento1
  dato

  lat;
  long;
  name;
  fechaEv;
  idEv
  constructor(
    private route: ActivatedRoute,
    private _serviceStudent : EstudianteService,
    private _route: Router
  ) { }

  ngOnInit() {

    this.dato = this.route.queryParamMap.pipe(map(params=> params.get('idMateria') || ''));
    this.dato.subscribe(data=>{this.idMateria1 = data})

  }

  nuevoEstudiante(){
    var evento: EventoInterface = {
      id: this.idEv,
      nombre: this.name,
      fecha: this.fechaEv,
      latitud: this.lat,
      longitud: this.long
    }

    this._serviceStudent.registrarEvento(evento).subscribe((data)=>{
      this._serviceStudent.agregarEventoMateria(this.idMateria1, data.id);
    })

      this._route.navigate(['/home'])

  }

  cancelar(){
    this._route.navigate(['/home'])
  }

}


