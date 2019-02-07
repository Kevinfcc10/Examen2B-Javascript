import { Component, OnInit } from '@angular/core';
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor() { }

  nombre='Kevin'
  cols: any[] = [
    { field: 'rol', header: 'Roles' },
    ]

  roles: any[] = [
    {rol:'Usuario'},
    {rol:'Administrador'}
    ]

  cols2: any[] = [
    { field2: 'dato'},
  ]

  informacion: any[] = [
    {dato:'Kevin'},
    {dato:'kevin_'},
    {dato:'fecha'}
  ]


  ngOnInit() {

  }

}
