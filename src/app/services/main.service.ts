import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  //! ---------------Funciones que hacen peticiones--------------- //
  // [GET]
  private async request(url: string){
    const headers = this.getCabecera();
    let ans = await new Promise((resolve)=>{
      this.http.get(url, {headers, observe:'response'}).subscribe({
        next: (response) => {
          //Validar statuscode
          console.log(response);

          //La respuesta del servidor
          resolve(response.body);
        },
          //Si no hay respuesta (el servidor no responde o se perdio la conexion a internet)
        error: () => {
          // rejects(err);
          resolve("error")
        }
      })
    });    
    return ans;
  }

  // [POST]
  private async requestPost(url: string, obj: any = null){
    const headers = this.getCabecera();
    let ans = await new Promise((resolve)=>{
      this.http.post(url, obj, {headers, observe:'response'}).subscribe({
        next: (response) => {
          //Validar statuscode
          console.log(response);

          //La respuesta del servidor
          resolve(response.body);
        },
          //Si no hay respuesta (el servidor no responde o se perdio la conexion a internet)
        error: () => {
          // rejects(err);
          resolve("error")
        }
      })
    });    
    return ans;
  }

  async getPerfil(){
    let ans: any = await this.request(`${environment.urlAccess}Funcionarios`);
    return ans;
  }
}
