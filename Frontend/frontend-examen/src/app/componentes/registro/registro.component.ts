import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioInterface, UsuarioNuevo, UsuarioService} from "../servicios/usuario-service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  nombreReg;
  correoReg;
  passReg;
  fecha_nacimientoReg;

  constructor(
    private _router: Router,
    private _userService: UsuarioService
  ) { }

  ngOnInit() {
  }

  irLogin(){

    var usuario: UsuarioNuevo = {
      nombre: this.nombreReg,
      correo:this.correoReg,
      password:this.passReg,
      nacimiento:this.fecha_nacimientoReg,
      rol:1
    }

    this._userService.agregarUsuario(usuario);

    this._router.navigate(['/login']);
  }

  irLoginCancel(){
    this._router.navigate(['/login']);
  }
}
