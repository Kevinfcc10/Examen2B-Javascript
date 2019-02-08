import { Component, OnInit } from '@angular/core';
import {map} from "rxjs/internal/operators";
import {ActivatedRoute} from "@angular/router";
import {EstudianteService} from "../servicios/estudiante-service";
import {MateriaInterface} from "../servicios/usuario-service";

@Component({
  selector: 'app-informacion-evento',
  templateUrl: './informacion-evento.component.html',
  styleUrls: ['./informacion-evento.component.css']
})
export class InformacionEventoComponent implements OnInit {

  arreglo: Informacion[] = []
  arregloMateriaFK: MateriaInterface[] = []
  constructor(
    private route: ActivatedRoute,
    private serviceEstudiante: EstudianteService
  ) { }

  idEvento;
  nombreEvento;
  dato;

  ngOnInit() {

    this.dato = this.route.queryParamMap.pipe(map(params => params.get('id') || ''));
    this.dato.subscribe(data => {
      this.idEvento = data
    })

    this.dato = this.route.queryParamMap.pipe(map(params => params.get('nombre') || ''));
    this.dato.subscribe(data => {
      this.nombreEvento = data
    })

    if (this.idEvento > 0) {
      this.serviceEstudiante.obtenerMateriaPorEvento(this.idEvento).subscribe(
        (valor) => {
          this.arreglo = valor;
          for(let i in valor){
            this.arregloMateriaFK[i] = valor[i].materiafk
          }
          console.log(this.arregloMateriaFK)
        }
      )
    }
  }
}

export interface Informacion {
  nombre_eventos: tring,
  fecha_evento: string,
  latitud_evento: number,
  longitud_evento: number,
  materiafk: MateriaInterface[]
}

