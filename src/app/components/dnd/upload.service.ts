import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  porcentajeSubida: Subject<number> = new Subject<number>();
  
  constructor(private http: HttpClient) {
    this.porcentajeSubida.next(0);
  }

  public getCabecera() {
    const headers = new HttpHeaders()
          .append('Authorization',
          'Bearer ' + (localStorage.getItem('Authorization') == null ? '' : localStorage.getItem('Authorization')));
    return headers;
  }

  subirFoto(archivo: File) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();
      formData.append('files', archivo, archivo.name);

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Imagen subida');
            resolve(JSON.parse(xhr.response));
          } else {
            console.log('Fallo la solictud');
            reject(JSON.parse(xhr.response));
          }
        }
      };
      let url = environment.urlFile;
      xhr.open('POST', url, true);
      xhr.upload.onprogress = (e) => {
        var percentComplete = Math.ceil((e.loaded / e.total) * 100);
        this.porcentajeSubida.next(percentComplete);
      };
      // xhr.setRequestHeader('Authorization', 'Bearer ' + (localStorage.getItem('Authorization') == null ? '' : localStorage.getItem('Authorization')));
      xhr.send(formData);
    });
  }
}