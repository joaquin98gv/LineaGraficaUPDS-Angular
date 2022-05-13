import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @HostBinding('class') className = '';
  modoOscuro = false;
  toggle = false;
  search = '';
  constructor(private mainS: MainService, private overlay: OverlayContainer) { }

  ngOnInit(): void {
    if (localStorage.getItem('theme') == 'dark') {
      this.modoOscuro = true;
      this.overlay.getContainerElement().classList.add(this.mainS.darkClassName);
    }
  }

  changeToggle() {
    this.toggle = !this.toggle;
    this.mainS.toggle.next(this.toggle);
  }

  cambiarModo(){
    this.modoOscuro = !this.modoOscuro;
    this.mainS.modoOscuro.next(this.modoOscuro);
  }

}
