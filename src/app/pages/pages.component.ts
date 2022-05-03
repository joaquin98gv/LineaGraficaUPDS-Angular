import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private mainS: MainService, private router: Router, private overlay: OverlayContainer) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.modoOscuro = true;
      console.log(this.overlay.getContainerElement().classList);
      
      this.overlay.getContainerElement().classList.add(this.darkClassName);
    } else {
      this.overlay.getContainerElement().classList.add(this.darkClassName);
    }
  }
  cambiarModo(){
    console.log(this.overlay.getContainerElement());
    
    this.modoOscuro = !this.modoOscuro;
    localStorage.setItem('theme', this.modoOscuro ? 'dark' : 'light');
    if (this.modoOscuro) {
      this.overlay.getContainerElement().classList.add(this.darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(this.darkClassName);
    }
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

}
