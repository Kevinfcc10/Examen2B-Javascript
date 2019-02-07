import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-atributos-materia',
  templateUrl: './atributos-materia.component.html',
  styleUrls: ['./atributos-materia.component.css']
})
export class AtributosMateriaComponent implements OnInit {

  @Input() nombre:string;
  @Input() codigo:string;
  @Input() descripcion:string;
  @Input() activo:boolean;
  @Input() fechaCreacion:string;
  @Input() horas:number;

  @Output() selecciono: EventEmitter<string> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }


  seleccionoMateria() {
    this.selecciono.emit( this.nombre);
    console.log(this.nombre)
  }

}
