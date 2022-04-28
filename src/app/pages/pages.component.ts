import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  toggle = false;
  userName = "Joaquin.Gonzalez";
  constructor(private mainS: MainService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

}
