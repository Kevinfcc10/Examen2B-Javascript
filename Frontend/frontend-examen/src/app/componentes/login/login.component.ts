import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioInterface, UsuarioService} from "../servicios/usuario-service";
import {VariablesGlobales} from "../servicios/variablesGlobales";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: any
  mailUser;
  passUser;

  constructor(
    private _router: Router,
    private _userService: UsuarioService
  ) { }

  ngOnInit() {

  }


  irRegistro(){
    this._router.navigate(['/registro']);
  }

  irHome(){
    var obsevable$ = this._userService.findUserLogin(this.mailUser, this.passUser);
    obsevable$.subscribe(
      results =>{
        this.usuarioLogin = results;
        if(this.usuarioLogin[0].correo_usuario === this.mailUser && this.usuarioLogin[0].password_usuario === this.passUser){
          var valor = this.usuarioLogin[0].rolfk.map(rol => rol.nombre_rol)
          for (let key in valor){
            console.log(valor[key])
            if(valor[key] === 'usuario'){
              VariablesGlobales.isUser = true;
            }else{
              VariablesGlobales.isAdministrator = true;
            }
          }
          VariablesGlobales.idUser = this.usuarioLogin[0].id;
          this._router.navigate(['/home']);
        }
        else{
          console.log('credenciales incorrectas');
        }
      }
    )
  }
}
