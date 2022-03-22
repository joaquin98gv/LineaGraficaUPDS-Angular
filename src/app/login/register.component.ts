import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ParticipanteService, SedeService, CarreraService } from '../services/service.index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formI!: FormGroup;
  formE!: FormGroup;
  EsUpds!: boolean;
  lSedes: any = [];
  lCarreras: any = [];
  constructor(  public route: Router,
                // public participanteS: ParticipanteService,
                private fb: FormBuilder,
                // private sedeS: SedeService,
                // private carreraS: CarreraService
                 ) {
    // this.obtenerCarreras();
    this.obtenerSedes();
    this.crearFormularioExterno();
    this.crearFormularioInterno();
  }

  ngOnInit(): void {
  }

  crearFormularioExterno() {
    this.formE = this.fb.group({
      Id: [0],
      NombreCompleto: ['', Validators.required],
      Documento: ['', Validators.required],
      Email: ['', Validators.required],
      Telefono: ['', Validators.required],
      SiglaCarrera: ['', Validators.required],
      EsProfesional: [false],
      EstudianteUpds: [false],
      QuiereInformacion: [true],
      IdSede: ['', Validators.required],
      Estado: [true]
    });
  }

  obtenerSedes() {
    // this.sedeS.getSedes().subscribe((x: any) => {
    //   if (x.status === 200) {
    //     this.lSedes = x.data;
    //   }
    // });
  }

  obtenerCarreras(idSede = 1) {
    // this.carreraS.getPlanEstudio(idSede).subscribe((x: any) => {
    //   if (x.status === 200) {
    //     this.lCarreras = x.data;
    //   }
    // });
  }

  crearFormularioInterno() {
    this.formI = this.fb.group({
      Documento: ['', Validators.required],
      EstudianteUpds: [true]
    });
  }

  saveE() {
    if (this.formE.valid) {
      // this.participanteS.registrar(this.formE.value).subscribe((x: any) => {
      //   console.log(x);
      //   if (x.status === 200) {
      //     this.toastrS.success(x.message);
      //     this.route.navigateByUrl('login');
      //   } else {
      //     this.toastrS.error(x.message);
      //   }
      // });
    }
  }

  saveI() {
    if (this.formI.valid) {
      // this.participanteS.registrar(this.formI.value).subscribe((x: any) => {
      //   if (x.status === 200) {
      //     this.toastrS.success(x.message);
      //     this.route.navigateByUrl('login');
      //   } else {
      //     this.toastrS.error(x.message);
      //   }
      // });
    }
  }

  onChange( newValue: any ) {
    this.obtenerCarreras(newValue.value);
    this.formE.controls['SiglaCarrera'].setValue('');
  }

}
