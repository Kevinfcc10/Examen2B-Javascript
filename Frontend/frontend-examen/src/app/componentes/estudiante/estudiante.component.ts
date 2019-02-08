import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {map} from "rxjs/internal/operators";
import {EstudianteService, Updateinterface} from "../servicios/estudiante-service";
import {VariablesGlobales} from "../servicios/variablesGlobales";

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  estudiante1;
  id;
  nombres_estudiante;
  apellidos_estudiante;
  fecha_nacimiento_estudiante;
  semestre_actual_estudiante;
  graduado;
  usuariofk;
  estadoEstudiante

  constructor(private route: ActivatedRoute,
              private _router: Router,
              private studentService: EstudianteService
  ) { }

  ngOnInit() {

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('id') || ''));
    this.estudiante1.subscribe(data=>{this.id = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('nombres_estudiante') || ''));
    this.estudiante1.subscribe(data=>{this.nombres_estudiante = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('apellidos_estudiante') || ''));
    this.estudiante1.subscribe(data=>{this.apellidos_estudiante = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('fecha_nacimiento_estudiante') || ''));
    this.estudiante1.subscribe(data=>{this.fecha_nacimiento_estudiante = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('semestre_actual_estudiante') || ''));
    this.estudiante1.subscribe(data=>{this.semestre_actual_estudiante = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('graduado') || ''));
    this.estudiante1.subscribe(data=>{this.graduado = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('usuariofk') || ''));
    this.estudiante1.subscribe(data=>{this.usuariofk = data})

    this.estudiante1 = this.route.queryParamMap.pipe(map(params=> params.get('estadoEst') || ''));
    this.estudiante1.subscribe(data=>{this.estadoEstudiante = data})
  }

  actualizar(){

    var student: Updateinterface = {
      nombres: this.nombres_estudiante,
      apellidos: this.apellidos_estudiante,
      nacimiento: this.fecha_nacimiento_estudiante,
      semestre: this.semestre_actual_estudiante,
      graduado:this.graduado,
      usuario:this.usuariofk
    }

    this.studentService.updateStudent(student,this.id);
    this._router.navigate(['/home']);
  }

  nuevoEstudiante(){
    var student: Updateinterface = {
      nombres: this.nombres_estudiante,
      apellidos: this.apellidos_estudiante,
      nacimiento: this.fecha_nacimiento_estudiante,
      semestre: this.semestre_actual_estudiante,
      graduado:this.graduado,
      usuario:VariablesGlobales.idUser
    }
    this.studentService.registrarEstudiante(student);
    this._router.navigate(['/home']);
  }

  cancelar(){
    this._router.navigate(['/home']);
  }

}
