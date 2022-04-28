import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  urlLogin = environment.urlLogin;
  token = '';
  constructor(  public router: Router  ) {
    localStorage.removeItem('Authorization');
    this.token = this.router.parseUrl(this.router.url).queryParams['token'];    
    if (this.token != '' && this.token != null) {
      localStorage.setItem('Authorization', this.token);
      router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {
  }

}
