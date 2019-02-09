import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Injectable()

export class EstudianteService {

  constructor(private readonly _httpClient:HttpClient){}

  delete(id:number){
    return this._httpClient.delete('http://localhost:1337/Estudiante/'+id,httpOptions).subscribe(ok=>{console.log(ok + ' eliminado con exito')})
  }

  obtenerMaterias(id:number){
    return this._httpClient.get('http://localhost:1337/Estudiante/'+id);
  }

  deleteMateria(id:number){
    return this._httpClient.delete('http://localhost:1337/Materia/'+id,httpOptions).subscribe(ok=>{console.log(ok + ' eliminado con exito')})
  }

  updateStudent(estudiante,id){
   return this._httpClient.put('http://localhost:1337/Estudiante/'+id,estudiante).subscribe()
  }

  registrarEstudiante(estudianteNuevo){
    return this._httpClient.post('http://localhost:1337/Estudiante/',estudianteNuevo).subscribe()
  }

  getSubject(id){
    return this._httpClient.get('http://localhost:1337/Materia/id/'+id);
  }

  updateSubject(materia,id){
    return this._httpClient.put('http://localhost:1337/Materia/'+id,materia).subscribe()
  }

  registrarMateria(materiaNueva){
    return this._httpClient.post('http://localhost:1337/Materia/',materiaNueva).subscribe()
  }

  /*Eventos*/
  obternerEventos(){
    return this._httpClient.get('http://localhost:1337/Evento/');
  }

  obtenerMateriaPorEvento(id){
    return this._httpClient.get('http://localhost:1337/Evento/'+id);
  }

  registrarEvento(eventito){
    return this._httpClient.post('http://localhost:1337/Evento/',eventito)
  }

  agregarEventoMateria(idMat, idEve){

    console.log(idMat + ' ' + idEve)
    var ids: addEvento = {
      idMateria: idMat,
      idEvento: idEve
    }

    return this._httpClient.post('http://localhost:1337/Materia/agregarEvento',ids).subscribe()
  }

}

export interface addEvento {
  idMateria: number,
  idEvento: number
}

export interface Eventos {
  id?:number
  nombre: string,
  fecha: string,
  latitud: number,
  longitud:number
}

export interface Updateinterface {
  nombres:string,
  apellidos:string,
  nacimiento:string,
  semestre:number,
  graduado:boolean,
  usuario:number
}

export interface UpdateinterfaceMat {
  nombre:string,
  codigo:string,
  descripcion:string,
  activo:boolean,
  creacion:string,
  horas:number,
  estudiante:number
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
