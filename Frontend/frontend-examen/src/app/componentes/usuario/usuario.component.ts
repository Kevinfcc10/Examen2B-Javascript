import { Component, OnInit } from '@angular/core';
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {EstudianteInterface, MateriaInterface, UsuarioService} from "../servicios/usuario-service";
import {EstudianteService} from "../servicios/estudiante-service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private _userService: UsuarioService,
    private _studentService: EstudianteService,
    private _router: Router
  ) { }

  cols2: any[] = [
    { field: 'nombre_materia', header: 'Nombre' },
    { field: 'código_materia', header: 'Codigo' },
    { field: 'descripcion_materia', header: 'Descripion' },
    { field: 'activo_materia', header: 'Activo' },
    { field: 'fecha_creacion_materia', header: 'Fecha Creacion' },
    { field: 'numero_horas_por_semana', header: 'Horas' },
    { field: 'acciones', header: 'Acciones' }
  ];

  cols: any[] = [
    { field: 'nombres_estudiante', header: 'Nombres' },
    { field: 'apellidos_estudiante', header: 'Apellidos' },
    { field: 'fecha_nacimiento_estudiante', header: 'Fecha nacimiento' },
    { field: 'semestre_actual_estudiante', header: 'Semestre' },
    { field: 'graduado', header: 'Graduado' },
    { field: 'acciones', header: 'Acciones' }
  ];
  estado :boolean =false;
  idEstudiante: number = 0;

  estudiantes: EstudianteInterface[] = [];
  estudiantesAux: EstudianteInterface[] = [];
  materiasAux: MateriaInterface[] = [];
  materias: MateriaInterface[] = [];





  ngOnInit() {

    if(this.estado == false){
      console.log('estado igual falso')
    }
    else {
      if(VariablesGlobales.idUser > 0){
        this.obtenerEstudiantes();
      }
    }
  }

  capturarInformacion(){
    this.estado = true;
    this.ngOnInit();
  }

  obtenerEstudiantes(){
    const obsevable$ = this._userService.findStudents(VariablesGlobales.idUser);
      obsevable$.subscribe(
        (resultado:any)=>{
          for (let i in resultado){
            this.estudiantesAux[i]= (resultado[i].estudiantes);
          }
          this.estudiantes = this.estudiantesAux[0]
          this.estudiantesAux = this.estudiantesAux[0]
        }
      )
  }

  eliminarEstudiante(estudiante:EstudianteInterface){
    const indice = this.estudiantesAux.findIndex(
      (estudianteBuscar) => {
        this._studentService.delete(estudiante.id);
        return estudianteBuscar.nombres_estudiante === estudiante.nombres_estudiante
      }
    );
    this.estudiantesAux.splice(indice,1);
  }

  obtenerMaterias(id){
    const obsevable$ =this._studentService.obtenerMaterias(id);
    obsevable$.subscribe(
      (resultado:any)=>{
        for (let i in resultado){
          this.materiasAux[i]= (resultado[i].materiasFk);
        }
        this.materias = this.materiasAux[0]
        this.materiasAux = this.materiasAux[0]
      }
    )
  }

  verMaterias(estudiante:EstudianteInterface){
    const indice = this.estudiantesAux.findIndex(
      (estudianteBuscar) => {
        this.idEstudiante = estudiante.id
        this.obtenerMaterias(this.idEstudiante)
      }
    );
  }

  eliminarMateria(materia:MateriaInterface){
    const indice = this.materiasAux.findIndex(
      (materiaBuscar) => {
        this._studentService.deleteMateria(materia.id);
        return materiaBuscar.nombre_materia === materia.nombre_materia
      }
    );
    this.materiasAux.splice(indice,1);
  }

  irActualizarEstudiante(estudiante:EstudianteInterface){

    let parametros: NavigationExtras  = {
      queryParams: {id: estudiante.id,
        nombres_estudiante: estudiante.nombres_estudiante,
        apellidos_estudiante: estudiante.apellidos_estudiante,
        fecha_nacimiento_estudiante: estudiante.fecha_nacimiento_estudiante,
        graduado: estudiante.graduado,
        semestre_actual_estudiante: estudiante.semestre_actual_estudiante,
        usuariofk: estudiante.usuariofk,
        estadoEst: true
      }
    }

    this._router.navigate(['/estudiante'], parametros);

  }

  irNuevoEstudiante(){
    this._router.navigate(['/estudiante']);
  }

  irNuevaMateria(estudiante:EstudianteInterface){
    VariablesGlobales.idStudent = estudiante.id
    this._router.navigate(['/materia']);
  }

  irMateria(materia:MateriaInterface) {

    let parametros: NavigationExtras  = {
      queryParams: {
        estadoMateria:true,
        id: materia.id
      }
    }

    this._router.navigate(['/materia'],parametros);
  }
}
