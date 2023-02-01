import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  categorias = [
    {
      nombre: 'Facturación'
    },
    {
      nombre: 'Soporte Técnico'
    },
    {
      nombre: 'Ventas'
    },
    {
      nombre: 'Información General'
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
