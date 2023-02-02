import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
// Services
import {ApiService} from '../../service/apiService'
// sweetAlert
import Swal from 'sweetalert2'

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

  constructor(private formBuilder: FormBuilder, private ApiService: ApiService) { }

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
      Swal.fire({
        icon: 'warning',
        title: 'Por favor completa todos los campos requeridos.',
      })
    } else {
      console.log('Valido')
      //this.ApiService.addComment(this.form.value)
      this.ApiService.addComment(this.form.value).subscribe(
        comment => {
          console.log(comment);
          Swal.fire({
            icon: 'success',
            title: 'Post exitoso',
          })
        }
    );
    this.onReset()
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}



