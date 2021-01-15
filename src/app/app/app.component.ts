import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app-angular';
  navbarOpened: boolean = false;

  toggleNavBar(){
    this.navbarOpened = !this.navbarOpened;
  }

}
