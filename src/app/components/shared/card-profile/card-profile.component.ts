import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss']
})
export class CardProfileComponent implements OnInit {

  funcionario: any = {};
  constructor(private mainS: MainService,  
    private router: Router) {
      this.getPerfil().then((resp: any) => {
        if(resp == "error") this.logOut();
      });
    }

  ngOnInit(): void {
  }

  async getPerfil() {
    let response: any = await this.mainS.getPerfil();
    
    this.funcionario = response;
    return response;
  }

  logOut(){
    localStorage.removeItem('Authorization');
    this.router.navigateByUrl('/login');
  }

}
