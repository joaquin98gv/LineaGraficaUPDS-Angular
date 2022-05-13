import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @HostBinding('class') className = '';
  toggle = false;
  userName = "Joaquin.Gonzalez";
  modoOscuro = false;
  darkClassName = 'dark-theme';
  quiereBuscar = false;
  search = '';
  bread = '';
  appReady = false;
  menus: any[] = [];
  constructor(private mainS: MainService, 
    private overlay: OverlayContainer) {
      mainS.modoOscuro.subscribe((resp: any) => {
        this.modoOscuro = resp;
        localStorage.setItem('theme', this.modoOscuro ? 'dark' : 'light');
        if (resp) {
          this.overlay.getContainerElement().classList.add(this.mainS.darkClassName);
        } else {
          this.overlay.getContainerElement().classList.remove(this.mainS.darkClassName);
        }
      });
      mainS.toggle.subscribe((obs: any) => {this.toggle = obs});
      this.obtenerInterfaces().then((response: any) => {
        this.appReady = true;
      });
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.modoOscuro = true;
      this.overlay.getContainerElement().classList.add(this.mainS.darkClassName);
    }
  }

  async tienePermisos() {
    // let response = await this.mainS.getModulos();
  }
  async obtenerInterfaces() {
    // let response = await this.mainS.getInterfaces();
    // this.mainS.interfaces = response;
    // this.menus = response;
  }

}
