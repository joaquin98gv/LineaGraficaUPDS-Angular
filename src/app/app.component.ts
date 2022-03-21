import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  toggle = false;
  userName = "Joaquin.Gonzalez";
  constructor() { }

  changeToggle(){
    this.toggle = !this.toggle;
  }

}
