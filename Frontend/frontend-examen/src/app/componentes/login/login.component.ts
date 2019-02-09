import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioInterface, UsuarioService} from "../servicios/usuario-service";
import {VariablesGlobales} from "../servicios/variablesGlobales";
import {AuthService} from "../servicios/AuthService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  MensajeSalida
  usuarioLogin: any
  mailUser;
  passUser;
  roles: any[] = []

  constructor(
    private _router: Router,
    private _userService: UsuarioService,
    private _loginService: AuthService
  ) { }

  ngOnInit() {

  }


  irRegistro(){
    this._router.navigate(['/registro']);
  }

  irHome(){

    this._loginService.logueo(this.mailUser, this.passUser).subscribe(
      results => {
        this.usuarioLogin  = results;
        if(this.usuarioLogin  == ''){
          this.MensajeSalida = 'Credenciales incorrectas'
        }else{
          if(this.usuarioLogin.correo_usuario === this.mailUser && this.usuarioLogin.password_usuario === this.passUser) {
            var valor = this.usuarioLogin.rolfk.map(rol => rol.nombre_rol)
            for (let key in valor) {
              if (valor[key] === 'usuario') {
                VariablesGlobales.isUser = true;
              } else {
                VariablesGlobales.isAdministrator = true;
              }
            }
            VariablesGlobales.idUser = this.usuarioLogin.id;
            console.log(VariablesGlobales.idUser)
            this._router.navigate(['/home']);
          }
        }
      }
    )
  }
}

/*

 //var obsevable$ = this._userService.findUserLogin(this.mailUser, this.passUser);
    obsevable$.subscribe(
      results =>{
        this.usuarioLogin = results;
        if(results == ''){
          this.MensajeSalida = 'Credenciales incorrectas'
        }else{
          if(this.usuarioLogin[0].correo_usuario === this.mailUser && this.usuarioLogin[0].password_usuario === this.passUser){

          }
        }

      },
    )
 */
