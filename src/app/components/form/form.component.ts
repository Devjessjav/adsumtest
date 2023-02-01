import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  form: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        nombre: ['', Validators.required],
        empresa: ['', [Validators.required]],
        correo: ['', [Validators.required, Validators.email]],
        telefono: ['', [Validators.required]],
        categoria: ['', [Validators.required]],
        mensaje: ['', [Validators.required]],
      }
    );
  }


  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(JSON.stringify(this.form.value, null, 2));
    if (this.form.invalid) {
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}



