import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from "@angular/router";
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {UsuarioInterface, UsuarioService} from "../servicios/usuario-service";

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(
    private _router: Router,
    private _userService: UsuarioService,
  ) { }

  usersAux: any[];
  busqueda = ''
  estadoAdmin:boolean =false;

  cols: any[] = [
    { field: 'nombre_usuario', header: 'Nombre' },
    { field: 'correo_usuario', header: 'Correo' },
    { field: 'fecha_nacimiento_usuario', header: 'Fecha nacimiento' },
    { field: 'acciones', header: 'Acciones' }
  ];


  ngOnInit() {
    if(this.estadoAdmin == false){
      console.log('estado igual falso')
    }
    else {
      if(VariablesGlobales.idUser > 0){
        this.obtenerUsuarios();
      }
    }

  }

  obtenerUsuarios(){
    const obsevable$ = this._userService.findUsers(this.busqueda);
    obsevable$.subscribe(
      (resultado:any)=>{
          this.usersAux = resultado;
          console.log(this.usersAux )
      }
    )
  }

  capturarInformacion(){
    this.estadoAdmin = true;
    this.ngOnInit();
  }

  irRoles(userSelect: UsuarioInterface){
    let parametros : NavigationExtras  = {
      queryParams: {idUser1: userSelect.id}
    }
    this._router.navigate(['/roles'],parametros);
  }

  eliminar(){

  }

}
