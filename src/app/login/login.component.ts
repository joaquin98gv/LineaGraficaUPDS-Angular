import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  hide = false;
  constructor(  public route: Router,
                // public mainS: ParticipanteService,
                private fb: FormBuilder  ) {
    this.crearFormulario();
  }

  ngOnInit(): void {
    // init_plugins();
  }

  crearFormulario() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  save() {
    if (this.form.valid) {
      // this.mainS.logear(this.form.value).subscribe((x: any) => {
      //     localStorage.setItem('Authorization', x.data.token);
      //     const data = { email: x.data.email, nombre: x.data.nombre };
      //     localStorage.setItem('user_CursosUpds', JSON.stringify(data));
      //     this.route.navigateByUrl('');
      // });
    }
  }

}
