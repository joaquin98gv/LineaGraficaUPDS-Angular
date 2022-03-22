import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form!: FormGroup;
  lPais = [
    {Id: '1', Nombre: 'Bolivia'},
    {Id: '2', Nombre: 'EEUU'},
    {Id: '3', Nombre: 'Cuba'}
  ];
  lSede = [
    {Id: '1', Nombre: 'Santa Cruz'},
    {Id: '2', Nombre: 'La Paz'},
    {Id: '3', Nombre: 'Cochabamba'}
  ];
  constructor(private fb: FormBuilder ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
  }

  crearFormulario() {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required],
      pass: ['', Validators.required],
      doc: ['', Validators.required],
      idSede: ['', Validators.required],
      idPais: ['', Validators.required],
    });
  }

  save() {
    if (this.form.valid) {

    }
  }

}
