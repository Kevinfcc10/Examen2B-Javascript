import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {EstudianteService, Updateinterface, UpdateinterfaceMat} from "../servicios/estudiante-service";
import {map} from "rxjs/internal/operators";
import {VariablesGlobales} from "../servicios/variablesGlobales";

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  dato
  estadoMat

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private subjectService: EstudianteService
  ) { }


  /*Variables de los input*/
  id;
  nombre_materia;
  codigo_materia;
  descripcion_materia;
  activo_materia;
  fecha_creacion_materia;
  numero_horas_por_semana;
  estudiantefk;

  ngOnInit() {

    this.dato = this.route.queryParamMap.pipe(map(params=> params.get('estadoMateria') || ''));
    this.dato.subscribe(data=>{this.estadoMat = data})

    this.dato = this.route.queryParamMap.pipe(map(params=> params.get('id') || ''));
    this.dato.subscribe(data=>{this.id = data})

    if(this.id != 0){
      this.subjectService.getSubject(this.id).subscribe(
        (valor) => {
          this.id = valor[0].id;
          this.nombre_materia = valor[0].nombre_materia;
          this.codigo_materia = valor[0].código_materia;
          this.descripcion_materia = valor[0].descripcion_materia;
          this.activo_materia = valor[0].activo_materia;
          this.fecha_creacion_materia = valor[0].fecha_creacion_materia;
          this.numero_horas_por_semana = valor[0].numero_horas_por_semana;
          this.estudiantefk = valor[0].estudiantefk;
        }
      )
    }

  }

  cancelar(){
    this._router.navigate(['/home']);
  }

  actualizarMat(){

    var materia: UpdateinterfaceMat = {
      nombre: this.nombre_materia,
      codigo: this.codigo_materia,
      descripcion: this.descripcion_materia,
      activo: this.activo_materia,
      creacion: this.fecha_creacion_materia,
      horas: this.numero_horas_por_semana,
      estudiante: this.estudiantefk
    }

    this.subjectService.updateSubject(materia,this.id);
    this._router.navigate(['/home']);
  }

  nuevaMateria(){
    var materia: UpdateinterfaceMat = {
      nombre: this.nombre_materia,
      codigo: this.codigo_materia,
      descripcion: this.descripcion_materia,
      activo: this.activo_materia,
      creacion: this.fecha_creacion_materia,
      horas: this.numero_horas_por_semana,
      estudiante: VariablesGlobales.idStudent
    }
    this.subjectService.registrarMateria(materia);
    this._router.navigate(['/home']);
  }

}
