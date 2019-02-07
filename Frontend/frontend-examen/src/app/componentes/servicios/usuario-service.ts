import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {

  constructor(private readonly _httpClient:HttpClient){

  }

  //obtener un usuario y sus roles
  findUserLogin(correo,pass) {
    return this._httpClient.get('http://localhost:1337/Usuario/buscarRol?correo='+correo+'&pass='+pass);
  }

  findStudents(id){
    return this._httpClient.get('http://localhost:1337/Usuario/buscarEstudiante/'+id);
  }

}

export interface UsuarioInterface {
  id?:number,
  nombre_usuario:string,
  correo_usuario:string,
  password_usuario:string,
  fecha_nacimiento_usuario:string,
  rolfk?: RolUsuarioInterface[],
  estudiantes?:EstudianteInterface[]
}

export interface RolUsuarioInterface {
  id:number,
  nombre_rol:string
}

export interface EstudianteInterface {
  id:number,
  nombres_estudiante:string,
  apellidos_estudiante:string,
  fecha_nacimiento_estudiante:string,
  semestre_actual_estudiante: number,
  graduado:boolean,
  usuariofk:number,
}
