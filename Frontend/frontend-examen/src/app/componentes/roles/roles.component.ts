import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";
import {map} from "rxjs/internal/operators";
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../servicios/usuario-service";
import {VariablesGlobales} from "../servicios/variablesGlobales";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  idUsuario
  bool: boolean;
  constructor(
    private route: ActivatedRoute,
    private _userService: UsuarioService,
  ) { }

  cols: any[] = [{ field: 'rol', header: 'Roles' }]
  roles: rolInterface[] = []
  informacion: any[] = []
  cols2: any[] = [{ field2: 'dato'}]
  datoUser

  /*variables de los datos*/
  nombre1
  correo
  fecha
  datos


  ngOnInit() {
    this.datoUser = this.route.queryParamMap.pipe(map(params=> params.get('idUser1') || ''));
    this.datoUser.subscribe(data=>{this.idUsuario = data})

    if(this.idUsuario > 0){
      this._userService.findUserForId(this.idUsuario).subscribe(
        (valor)=>{
          this.nombre1 = valor[0].nombre_usuario
          this.correo = valor[0].correo_usuario
          this.fecha = valor[0].fecha_nacimiento_usuario
          this.datos = valor[0].rolfk

          for (var key in this.datos){
            const clave : rolInterface = {
              rol: this.datos[key].nombre_rol
            };
            this.roles.push(clave)
          }

          this.informacion = [
            {dato: this.nombre1},
            {dato: this.correo},
            {dato: this.fecha}
          ]
        }
      )
    }
  }

  deleteRol(rol: rolInterface){
    const indice = this.roles.findIndex(
      (rolBuscar) => {
        return rolBuscar.rol === rol.rol
      }
    );

    if(this.roles[indice].rol === 'usuario'){
      this._userService.deleteRol(this.idUsuario,1);
    }else{
      this._userService.deleteRol(this.idUsuario,2);
    }

    this.roles.splice(indice,1);
  }

  nuevoRol(){
    this.bool =false;
    const clave : rolInterface = {
      rol: document.getElementById("selectRol").value
    };
    for (let i in this.roles){
      if(this.roles[i].rol == clave.rol){
        this.bool = true
      }
    }
    if(!this.bool){
      if(clave.rol === 'usuario'){
        this._userService.agregarNuevoRol(this.idUsuario,1);
      }else{
        this._userService.agregarNuevoRol(this.idUsuario,2);
      }
      this.roles.push(clave);
    }
  }


}

export interface rolInterface {
  rol:string
}
