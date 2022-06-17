import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() menus: any[] = [];
  @Output() aplicarCambios: EventEmitter<void> = new EventEmitter<void>()
  @Output() cambiarModoEvent: EventEmitter<void> = new EventEmitter<void>()

  tema: string = 'light';
  modoOscuro = false;

  funcionario: any = {};

  constructor(private router: Router, private mainS: MainService) {
    // this.getPerfil().then((resp: any) => {
    //   if(resp == "error") this.logOut();
    // });
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.tema = 'dark';
      this.modoOscuro = true;
    }
  }
  
  toggleOff(){
    this.aplicarCambios.emit();
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

  cambiarModo(){
    // this.aplicarCambios.emit();
    this.modoOscuro = this.tema == 'light' ? false : true;
    this.mainS.modoOscuro.next(this.modoOscuro);
  }

  async getPerfil() {
    let response: any = await this.mainS.getPerfil();
    
    this.funcionario = response;
    return response;
  }

}
