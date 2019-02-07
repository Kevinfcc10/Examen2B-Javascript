import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {EstudianteInterface} from "./usuario-service";
import {Observable} from "rxjs/index";
import {map} from "rxjs/internal/operators";

@Injectable()

export class EstudianteService {

  constructor(private readonly _httpClient:HttpClient){}

  deleteStudent(id:number){
    return this._httpClient.delete('http://localhost:1337/Estudiante/'+id, httpOptions);
  }

  delete(id:number){
    return this._httpClient.delete('http://localhost:1337/Estudiante/'+id,httpOptions).subscribe(ok=>{console.log(ok + ' eliminado')})
  }

}


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
