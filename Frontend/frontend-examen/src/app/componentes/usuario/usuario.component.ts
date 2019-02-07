import { Component, OnInit } from '@angular/core';
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {EstudianteInterface, UsuarioService} from "../servicios/usuario-service";
import {EstudianteService} from "../servicios/estudiante-service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(
    private _userService: UsuarioService,
    private _studentService: EstudianteService
  ) { }

  estudiantes: EstudianteInterface[] = []
  estudiantesAux: EstudianteInterface[] = []
  materias:any;
  cols2: any[]
  cols: any[];
  estado :boolean =false;

  ngOnInit() {

    if(this.estado == false){
      console.log('estado igual falso')
    }
    else {
      if(VariablesGlobales.idUser > 0){
        this.obtenerEstudiantes();
      }
      this.cols = [
        { field: 'nombres_estudiante', header: 'Nombres' },
        { field: 'apellidos_estudiante', header: 'Apellidos' },
        { field: 'fecha_nacimiento_estudiante', header: 'Fecha nacimiento' },
        { field: 'semestre_actual_estudiante', header: 'Semestre' },
        { field: 'graduado', header: 'Graduado' },
        { field: 'acciones', header: 'Acciones' }
      ];
    }
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

  capturarInformacion(){
    this.estado = true;
    this.ngOnInit();
  }

  eliminarEstudiante(estudiante:EstudianteInterface){
    console.log(estudiante)
    const indice = this.estudiantesAux.findIndex(
      (estudianteBuscar) => {
        this._studentService.delete(estudiante.id);
        return estudianteBuscar.nombres_estudiante === estudiante.nombres_estudiante
      }
    );
    this.estudiantesAux.splice(indice,1);
  }


}

/*
this.cols2 = [
        { field: 'nombre', header: 'Nombre' },
        { field: 'codigo', header: 'Codigo' },
        { field: 'descripcion', header: 'Descripion' },
        { field: 'activo', header: 'Activo' },
        { field: 'fechaCreacion', header: 'Fecha Creacion' },
        { field: 'horas', header: 'Horas' },
        { field: 'acciones', header: 'Acciones' }
      ];

      this.materias = [
        { nombre: 'Apple', codigo: '51%', descripcion: '40%',activo: 'Apple', fechaCreacion: '51%', horas:25},
        { nombre: 'Samsung', codigo: '83%', descripcion: '96%',activo: 'Apple', fechaCreacion: '51%', horas:25},
        { nombre: 'Apple', codigo: '51%', descripcion: '40%',activo: 'Apple', fechaCreacion: '51%', horas:25},
        { nombre: 'Samsung', codigo: '83%', descripcion: '96%',activo: 'Apple', fechaCreacion: '51%', horas:25}
      ];
 */


/*this.estudiantes1 = [
      { nombres: 'Apple', apellidos: '51%', nacimiento: '40%',semestre: 'Apple', graduado: '51%'},
      { nombres: 'Samsung', apellidos: '83%', nacimiento: '96%',semestre: 'Apple', graduado: '51%'},
      { nombres: 'Microsoft', apellidos: '38%', nacimiento: '5%',semestre: 'Apple', graduado: '51%'},
      { nombres: 'Philips', apellidos: '49%', nacimiento: '22%',semestre: 'Apple', graduado: '51%'},
    ];*/
