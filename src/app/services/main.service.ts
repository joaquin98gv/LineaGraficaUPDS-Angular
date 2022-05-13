import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // toggle menu
  toggle: Subject<boolean> = new Subject<boolean>();
  // modo oscuro
  modoOscuro: Subject<boolean> = new Subject<boolean>();
  darkClassName = 'dark-theme';
  //Permisos
  public interfaces = [];
  
  cad: Subject<string> = new Subject<string>();
  constructor(private http: HttpClient, private toastr: ToastrService) {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  public getCabecera() {
    const headers = new HttpHeaders()
          .append('Authorization',
          'Bearer ' + (localStorage.getItem('Authorization') == null ? '' : localStorage.getItem('Authorization')));
    return headers;
  }
}
